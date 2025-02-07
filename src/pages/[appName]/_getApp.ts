import { db, AppMapping, eq, sql } from "astro:db"
export async function getApp(appShort: string) {
  const results = await db.select()
    .from(AppMapping)
    .where(eq(sql<string>`lower(${AppMapping.short})`, appShort.toLowerCase()));

  if (!results[0]) throw new Error("App not found: " + appShort);
  
  return results[0];
}