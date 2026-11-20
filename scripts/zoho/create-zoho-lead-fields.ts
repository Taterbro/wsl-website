import fs from "node:fs/promises";
import path from "node:path";

type PickListValue = { display_value: string; actual_value: string };

type FieldConfig = {
  formField: string;
  field_label: string;
  data_type: string;
  length?: number;
  pick_list_values?: PickListValue[];
  textarea?: { type: "small" | "large" | "rich_text" };
};

type Config = {
  module: string;
  fields: FieldConfig[];
};

type ZohoFieldMeta = {
  id?: string;
  api_name?: string;
  field_label?: string;
  display_label?: string;
};

type FieldResult = {
  formField: string;
  field_label: string;
  status: "created" | "existing" | "failed";
  api_name: string | null;
  id: string | null;
  message?: string;
  details?: unknown;
};

const CONFIG_PATH = path.resolve("scripts/zoho/lead-fields.config.json");
const OUTPUT_PATH = path.resolve("lib/zoho-lead-field-map.generated.json");

async function loadEnvFile(file = ".env") {
  try {
    const content = await fs.readFile(path.resolve(file), "utf8");
    for (const line of content.replace(/^\uFEFF/, "").split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let val = trimmed.slice(eq + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      if (!(key in process.env) && key) process.env[key] = val;
    }
  } catch {
    // ignore missing/unreadable env file
  }
}

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}. Ensure it is set in your environment or .env file.`,
    );
  }
  return value;
}

async function getAccessToken(): Promise<string> {
  const accountsUrl = getEnv("ZOHO_ACCOUNTS_URL").replace(/\/$/, "");
  const body = new URLSearchParams({
    refresh_token: getEnv("ZOHO_REFRESH_TOKEN"),
    client_id: getEnv("ZOHO_CLIENT_ID"),
    client_secret: getEnv("ZOHO_CLIENT_SECRET"),
    grant_type: "refresh_token",
  });

  const res = await fetch(`${accountsUrl}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  const json = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (!res.ok || !json.access_token) {
    throw new Error(
      `Failed to obtain Zoho access token: ${JSON.stringify(json)}`,
    );
  }
  return json.access_token as string;
}

function normLabel(label: string | undefined | null): string {
  return (label ?? "").trim().toLowerCase();
}

async function fetchAllFields(
  apiDomain: string,
  token: string,
  moduleName: string,
): Promise<ZohoFieldMeta[]> {
  const url = `${apiDomain.replace(/\/$/, "")}/crm/v8/settings/fields?module=${encodeURIComponent(moduleName)}&type=all`;
  const res = await fetch(url, {
    headers: { Authorization: `Zoho-oauthtoken ${token}` },
    cache: "no-store",
  });
  const json = (await res.json().catch(() => ({}))) as {
    fields?: ZohoFieldMeta[];
    message?: string;
  };
  if (!res.ok) {
    throw new Error(
      `Failed to fetch field metadata: ${res.status} ${JSON.stringify(json)}`,
    );
  }
  return Array.isArray(json.fields) ? json.fields : [];
}

function findByLabel(
  fields: ZohoFieldMeta[],
  label: string,
): ZohoFieldMeta | undefined {
  const target = normLabel(label);
  return fields.find(
    (f) =>
      normLabel(f.field_label) === target ||
      normLabel(f.display_label) === target,
  );
}

function toCreatePayload(field: FieldConfig): Record<string, unknown> {
  const payload: Record<string, unknown> = {
    field_label: field.field_label,
    data_type: field.data_type,
  };
  if (field.length) payload.length = field.length;
  if (field.pick_list_values) payload.pick_list_values = field.pick_list_values;
  if (field.textarea) payload.textarea = field.textarea;
  return payload;
}

type ZohoApiItem = {
  status?: string;
  code?: string;
  message?: string;
  details?: Record<string, unknown>;
  error_code?: string;
};

async function createBatch(
  apiDomain: string,
  token: string,
  moduleName: string,
  batch: FieldConfig[],
): Promise<ZohoApiItem[]> {
  const url = `${apiDomain.replace(/\/$/, "")}/crm/v8/settings/fields?module=${encodeURIComponent(moduleName)}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields: batch.map(toCreatePayload) }),
    cache: "no-store",
  });
  const json = (await res.json().catch(() => ({}))) as {
    fields?: ZohoApiItem[];
    message?: string;
  };
  if (!res.ok) {
    return batch.map(() => ({
      status: "error",
      code: String(res.status),
      message: json?.message || "HTTP error",
      details: json as unknown as Record<string, unknown>,
    }));
  }
  if (!Array.isArray(json.fields)) {
    return batch.map(() => ({
      status: "error",
      code: "INVALID_RESPONSE",
      message: "Unexpected response shape",
      details: json as unknown as Record<string, unknown>,
    }));
  }
  return json.fields;
}

async function main() {
  await loadEnvFile(".env");
  const raw = await fs.readFile(CONFIG_PATH, "utf8");
  const config = JSON.parse(raw.replace(/^\uFEFF/, "")) as Config;
  const moduleName = config.module || "Leads";
  const apiDomain = getEnv("ZOHO_API_DOMAIN").replace(/\/$/, "");
  const token = await getAccessToken();

  console.log(
    `Loaded ${config.fields.length} field(s) for module ${moduleName}.`,
  );
  console.log("Fetching existing field metadata...");
  let existing = await fetchAllFields(apiDomain, token, moduleName);
  console.log(`Found ${existing.length} existing field(s) in ${moduleName}.`);

  const results: FieldResult[] = [];
  const pending: FieldConfig[] = [];

  for (const field of config.fields) {
    const match = findByLabel(existing, field.field_label);
    if (match?.api_name) {
      results.push({
        formField: field.formField,
        field_label: field.field_label,
        status: "existing",
        api_name: match.api_name,
        id: match.id ?? null,
        message: "Field already exists; skipped creation.",
      });
      console.log(
        `- SKIP  ${field.formField} (${field.field_label}) -> ${match.api_name}`,
      );
    } else {
      pending.push(field);
    }
  }

  for (let i = 0; i < pending.length; i += 5) {
    const batch = pending.slice(i, i + 5);
    const batchNum = Math.floor(i / 5) + 1;
    console.log(`\nCreating batch ${batchNum} (${batch.length} field(s))...`);
    let responses: ZohoApiItem[];
    try {
      responses = await createBatch(apiDomain, token, moduleName, batch);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      for (const field of batch) {
        results.push({
          formField: field.formField,
          field_label: field.field_label,
          status: "failed",
          api_name: null,
          id: null,
          message: msg,
        });
        console.log(`- FAIL  ${field.formField} (${field.field_label}): ${msg}`);
      }
      continue;
    }

    for (let j = 0; j < batch.length; j++) {
      const field = batch[j];
      const r = responses[j] ?? {};
      if (r.status === "success") {
        const details = r.details ?? {};
        const id = (details.id ?? details.ID ?? null) as string | null;
        results.push({
          formField: field.formField,
          field_label: field.field_label,
          status: "created",
          api_name: null, // resolved from metadata below
          id,
          message: r.message || "Field created.",
        });
        console.log(
          `- OK    ${field.formField} (${field.field_label}) created${id ? ` (id: ${id})` : ""}`,
        );
      } else {
        const code = r.code || r.error_code || "";
        const detailMsg =
          (r.details?.message as string | undefined) || r.message || "Creation failed";
        const duplicate =
          /already|exists|duplicate/i.test(String(code)) ||
          /already|exists|duplicate/i.test(String(detailMsg));
        results.push({
          formField: field.formField,
          field_label: field.field_label,
          status: duplicate ? "existing" : "failed",
          api_name: null,
          id: (r.details?.id as string | undefined) ?? null,
          message: `${detailMsg}${code ? ` [${code}]` : ""}`,
          details: r.details ?? r,
        });
        console.log(
          `- ${duplicate ? "EXIST" : "FAIL "} ${field.formField} (${field.field_label}): ${detailMsg}${code ? ` [${code}]` : ""}`,
        );
      }
    }
  }

  console.log("\nRefreshing field metadata to capture API names...");
  existing = await fetchAllFields(apiDomain, token, moduleName);
  for (const result of results) {
    if (result.api_name) continue;
    const match = findByLabel(existing, result.field_label);
    if (match?.api_name) {
      result.api_name = match.api_name;
      result.id = result.id ?? match.id ?? null;
    } else if (result.status !== "failed") {
      result.status = "failed";
      result.message =
        (result.message ? result.message + " " : "") +
        "API name not found in metadata after creation.";
    }
  }

  const configByFormField = new Map(
    config.fields.map((f) => [f.formField, f]),
  );
  const mapping: Record<
    string,
    {
      api_name: string;
      field_label: string;
      id: string | null;
      data_type: string;
    }
  > = {};
  for (const result of results) {
    if (result.api_name) {
      const cfg = configByFormField.get(result.formField);
      mapping[result.formField] = {
        api_name: result.api_name,
        field_label: result.field_label,
        id: result.id,
        data_type: cfg?.data_type ?? "text",
      };
    }
  }

  const output = {
    module: moduleName,
    generatedAt: new Date().toISOString(),
    mapping,
    results,
  };

  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(
    OUTPUT_PATH,
    JSON.stringify(output, null, 2) + "\n",
    "utf8",
  );

  const created = results.filter((r) => r.status === "created").length;
  const existingCount = results.filter((r) => r.status === "existing").length;
  const failed = results.filter((r) => r.status === "failed").length;

  console.log("\nSummary:");
  console.log(`  Created : ${created}`);
  console.log(`  Existing: ${existingCount}`);
  console.log(`  Failed  : ${failed}`);
  console.log(`  Mapped  : ${Object.keys(mapping).length}/${config.fields.length}`);
  console.log(`\nWrote mapping/results to ${OUTPUT_PATH}`);

  if (failed > 0) {
    console.error(
      "\nSome fields failed to create or resolve. Review the results above and in the output file.",
    );
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error("Fatal error:", err instanceof Error ? err.message : err);
  process.exit(1);
});
