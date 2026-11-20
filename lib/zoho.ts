import generatedMap from "./zoho-lead-field-map.generated.json";

const ACCOUNTS_URL = process.env.ZOHO_ACCOUNTS_URL;
const API_DOMAIN = process.env.ZOHO_API_DOMAIN;

type LeadFieldMapEntry = {
  api_name: string;
  field_label: string;
  id: string | null;
  data_type?: string;
};

type LeadFieldMapFile = {
  mapping?: Record<string, LeadFieldMapEntry>;
};

const leadFieldMap: Record<string, LeadFieldMapEntry> =
  ((generatedMap as LeadFieldMapFile | undefined)?.mapping ?? {}) as Record<
    string,
    LeadFieldMapEntry
  >;

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

async function getAccessToken() {
  const accountsUrl = (ACCOUNTS_URL ?? getEnv("ZOHO_ACCOUNTS_URL")).replace(
    /\/$/,
    "",
  );
  const body = new URLSearchParams({
    refresh_token: getEnv("ZOHO_REFRESH_TOKEN"),
    client_id: getEnv("ZOHO_CLIENT_ID"),
    client_secret: getEnv("ZOHO_CLIENT_SECRET"),
    grant_type: "refresh_token",
  });

  const response = await fetch(`${accountsUrl}/oauth/v2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  const result = (await response.json().catch(() => ({}))) as {
    access_token?: string;
  };

  if (!response.ok || !result.access_token) {
    throw new Error("Failed to authenticate with Zoho");
  }

  return result.access_token;
}

export type Lead = {
  firstName: string;
  lastName: string;
  workEmail: string;
  organisation?: string;
  roleTitle?: string;
  country?: string;
  message?: string;
  [key: string]: string | boolean | undefined;
};

function formatValueForDescription(
  key: string,
  value: string | boolean | undefined,
): string | null {
  if (value === undefined) return null;
  if (typeof value === "boolean") return `${key}: ${value ? "Yes" : "No"}`;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return `${key}: ${trimmed}`;
}

function toZohoFieldValue(
  entry: LeadFieldMapEntry | undefined,
  value: string | boolean | undefined,
): string | boolean | undefined {
  if (value === undefined) return undefined;
  const dataType = entry?.data_type;
  if (dataType === "boolean") {
    if (typeof value === "boolean") return value;
    const v = value.trim().toLowerCase();
    if (v === "true" || v === "yes" || v === "1") return true;
    if (v === "false" || v === "no" || v === "0" || v === "") return false;
    return Boolean(v);
  }
  if (typeof value === "boolean") return value ? "Yes" : "No";
  const trimmed = value.trim();
  return trimmed || undefined;
}

export async function createLead(lead: Lead) {
  const accessToken = await getAccessToken();
  const apiDomain = (API_DOMAIN ?? getEnv("ZOHO_API_DOMAIN")).replace(/\/$/, "");

  const {
    firstName,
    lastName,
    workEmail,
    organisation,
    roleTitle,
    country,
    message,
    ...otherFields
  } = lead;

  const payload: Record<string, unknown> = {
    First_Name: firstName,
    Last_Name: lastName,
    Email: workEmail,
    Company: organisation,
    Designation: roleTitle,
    Country: country,
  };

  const unmappedDetails: string[] = [];

  for (const [key, rawValue] of Object.entries(otherFields)) {
    const entry = leadFieldMap[key];
    const zohoValue = toZohoFieldValue(entry, rawValue);
    if (zohoValue === undefined) continue;

    if (entry?.api_name) {
      payload[entry.api_name] = zohoValue;
    } else {
      const formatted = formatValueForDescription(key, rawValue);
      if (formatted) unmappedDetails.push(formatted);
    }
  }

  const descriptionParts = [message?.trim(), unmappedDetails.join("\n")].filter(
    (part): part is string => Boolean(part && part.trim()),
  );
  if (descriptionParts.length > 0) {
    payload.Description = descriptionParts.join("\n\n");
  }

  const response = await fetch(`${apiDomain}/crm/v8/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [payload],
      trigger: ["workflow"],
    }),
    cache: "no-store",
  });

  const result = (await response.json().catch(() => ({}))) as {
    data?: Array<{ status?: string; details?: unknown; message?: string; code?: string }>;
  };

  if (!response.ok || result.data?.[0]?.status !== "success") {
    const detail = result.data?.[0];
    const msg = detail?.message || detail?.code || "Failed to create Zoho lead";
    throw new Error(msg);
  }

  return result.data[0].details;
}
