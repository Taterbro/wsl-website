export type Field = {
  name: string;
  type: string;
  label?: string;
  fields?: Field[];
  collection?: string;
  max?: number;
  mimeTypes?: string;
  filter?: unknown;
  [key: string]: unknown;
};

export type WpContext = {
  key: string;
  toAcf: (field: Field, parentKey: string) => unknown;
};

export type TsContext = {
  typeName: string;
  rowType: (field: Field, parentType: string) => string;
  collectionType: (slug: string) => string;
};

export type NormalizeContext = {
  source: string;
  deps: string;
  nextRowName: () => string;
  normalizeObject: (
    fields: Field[],
    source: string,
    opts: { rowName: string; async: boolean }
  ) => string;
  isAsync: (fields: Field[]) => boolean;
  collectionType: (slug: string) => string;
  collectionDepsKey: (slug: string) => string;
};

export type FieldTypeDefinition = {
  wp: (field: Field, ctx: WpContext) => Record<string, unknown>;
  ts: (field: Field, ctx: TsContext) => string;
  normalize: (field: Field, ctx: NormalizeContext) => string;
  dependencies?: (field: Field) => string[];
  isAsync?: (field: Field) => boolean;
};

const primitive = (
  type: string,
  ts: () => string,
  normalize: (source: string) => string
): FieldTypeDefinition => ({
  wp: () => ({ type }),
  ts,
  normalize: (field, ctx) => normalize(ctx.source),
});

export const FIELD_TYPES: Record<string, FieldTypeDefinition> = {
  text: primitive("text", () => "string", (source) => `toStr(${source})`),
  textarea: primitive(
    "textarea",
    () => "string",
    (source) => `toStr(${source})`
  ),
  url: primitive("url", () => "string", (source) => `toStr(${source})`),
  image: {
    wp: () => ({
      type: "image",
      return_format: "array",
      preview_size: "medium",
    }),
    ts: () => "CmsImage | null",
    normalize: (field, ctx) => `toImage(${ctx.source})`,
  },
  file: {
    wp: (field) => ({
      type: "file",
      return_format: "url",
      mime_types: field.mimeTypes ?? "",
    }),
    ts: () => "string",
    normalize: (field, ctx) => `toStr(${ctx.source})`,
  },
  repeater: {
    wp: (field, ctx) => ({
      type: "repeater",
      layout: "block",
      button_label: "Add row",
      sub_fields: field.fields!.map((f) => ctx.toAcf(f, ctx.key)),
    }),
    ts: (field, ctx) => `${ctx.rowType(field, ctx.typeName)}[]`,
    normalize: (field, ctx) => {
      const async = ctx.isAsync(field.fields!);
      const rowName = ctx.nextRowName();
      const object = ctx.normalizeObject(field.fields!, "row", {
        rowName,
        async,
      });

      if (async) {
        return `await Promise.all(
  toArray(${ctx.source}).map(async (${rowName}) => {
    const row = toRecord(${rowName});
    return ${object};
  })
)`;
      }

      return `toArray(${ctx.source}).map((${rowName}) => {
  const row = toRecord(${rowName});
  return ${object};
})`;
    },
    dependencies: (field) =>
      field.fields!.flatMap((f) => dependenciesOf(f)),
    isAsync: (field) => hasRelationshipDeep(field.fields!),
  },
  relationship: {
    wp: (field) => ({
      type: "relationship",
      post_type: [field.collection],
      max: field.max ?? "",
      return_format: "id",
      filters: ["search"],
    }),
    ts: (field, ctx) => `${ctx.collectionType(field.collection!)}[]`,
    normalize: (field, ctx) =>
      `pickByIds(${ctx.deps}.${ctx.collectionDepsKey(
        field.collection!
      )}, toIds(${ctx.source}))`,
    dependencies: (field) => [field.collection!],
  },
};

export function dependenciesOf(field: Field): string[] {
  const definition = FIELD_TYPES[field.type];
  if (!definition) return [];
  return definition.dependencies?.(field) ?? [];
}

export function isAsyncField(field: Field): boolean {
  const definition = FIELD_TYPES[field.type];
  if (!definition) return false;
  return definition.isAsync?.(field) ?? false;
}

export function hasRelationshipDeep(fields: Field[]): boolean {
  return fields.some(
    (field) =>
      field.type === "relationship" ||
      (field.fields !== undefined && hasRelationshipDeep(field.fields))
  );
}
