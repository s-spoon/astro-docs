import matter from "gray-matter";
import { relative } from "node:path";
import { parse } from 'csv-parse/sync';
import { readFileSync, writeFileSync } from "node:fs";
import * as glob from "glob";
import { slug as slugify } from "github-slugger";

async function indexDocs() {
  const files = glob.sync('../src/content/docs/**/*.md');
  const documents = files.flatMap(file => {
    const appShort = file.split("\\")[4] || "";
    if (file.startsWith("_") || appShort.startsWith("_"))
      return [];

    const content = readFileSync(file, 'utf-8');
    let data, markdownContent;
    
    try {
      const processed = matter(content);

      data = processed.data;
      markdownContent = processed.content;
    } catch (processingError) {
      console.error(`[FILE]: ${file}`);
      throw processingError;
    }
    
    const fileID = relative('../src/content/docs/', file)
      .replaceAll('\\', '/');
    const slug = fileID.replace(".md", "")
      .split('/').map((part, i) => i > 0 ? slugify(part) : part).join('/');

    if (data.draft) return [];

    return {
      id: fileID.replace('.md', '').replace(/[^A-Za-z0-9_-]/g, '-'),
      file: fileID,
      slug,
      title: data.title,
      type: data.type || 'Article',
      content: markdownContent,
      app: fileID.split('/')[0],
    };
  });

  writeFileSync("indexes/docs.json", JSON.stringify(documents));
}

async function indexApps(){
  const appMapping = readFileSync("../db/app-mapping.csv", "utf-8");
  const appListing = parse(appMapping, {
    columns: true
  })

  writeFileSync("indexes/apps.json", JSON.stringify(appListing));
}

await indexDocs().catch(console.error);
await indexApps().catch(console.error);