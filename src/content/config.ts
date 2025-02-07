import { z, defineCollection } from "astro:content";

const appSchema = z.object({
  title: z.string(),
  draft: z.boolean().optional().default(false),
  date: z.date().default(new Date()),
  releaseDate: z.date().optional(),
  // tag: z.string().optional(),
  type: z.union([
    z.literal("Article"),
    z.literal("KB Article"),
    z.literal("Release Note"),
    z.literal("Release Notes"),
  ]).default("Article"),

  // Release Note Specific
  releaseType: z
    .union([
      z.literal("Power Automate"),
      z.literal("Power Apps"),
      z.literal("PowerApps"),
      z.literal("BC"),
      z.literal("Google Play"),
    ])
    .default("BC"),
  platformType: z
    .union([
      z.literal("Power Automate"),
      z.literal("Power Apps"),
      z.literal("PowerApps"),
      z.literal("BC"),
      z.literal("Google Play"),
    ])
    .optional(),
  typeOfRelease: z
    .union([
      z.literal("Stability"),
      z.literal("Feature"),
      z.literal("Platform"),
      z.literal("Initial"),
    ])
    .optional(),
  releaseKind: z
    .union([
      z.literal("Stability"),
      z.literal("Feature"),
      z.literal("Platform"),
      z.literal("Initial"),
    ])
    .optional()
}).transform(data => {
  data.platformType = data.platformType ?? data.releaseType;
  data.releaseDate = data.releaseDate ?? data.date;
  data.typeOfRelease = data.typeOfRelease ?? data.releaseKind ?? "Stability";
  data.type = data.type === "Release Notes" ? "Release Note" : data.type;
  return data;
});

export type Frontmatter = z.infer<typeof appSchema>;
export const collections = {
  docs: defineCollection({ schema: appSchema, type: "content" }),
};
