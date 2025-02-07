import { getCollection } from "astro:content";

export type TOCEntry = {
  name: string,
  href: string | undefined,
  active?: boolean,
  default?: boolean,
  notFound?: boolean,
  items?: TOCEntry[]
}

export default async function getTOC(appName: string){
  const allDocs = await getCollection('docs');
  const TOC = (await import(`./content/docs/${appName}/_toc.yml`)).default as TOCEntry[];

  const addBase = (entry: TOCEntry, base = '') => {
    const hasBase = 'base' in entry && typeof entry.base === 'string';

    if (hasBase) {
      base += entry.base as string;
      delete entry['base'];
    }

    if (entry.href)
      entry.href = base + entry.href;

    if (entry.items)
      entry.items = entry.items.map(sub => addBase(sub, base));

    return entry;
  }

  const remappedTOC = TOC.map(entry => addBase(entry)).map(function remap(entry): TOCEntry {
    const ref = allDocs.find(e => e.id === appName + '/' + entry.href)
    let items = entry.items ? [...entry.items] : undefined;

    if (items) items = items.map(remap);
    if (!entry.href) {
      return {...entry, items, href: undefined}
    }
    if (!ref) {
      return {...entry, items, href: undefined, notFound: true}
    }

    const document = ref.slug.split(appName.toLowerCase() + '/')[1];
    const slug = `${appName}/${document}/`;

    return {...entry, items, href: slug }
  })

  return remappedTOC;
}

export function flattenTOC(acc: TOCEntry[], cur: TOCEntry): TOCEntry[] {
  const entries = cur.items?.reduce(flattenTOC, []) ?? [];
  return [...acc, cur, ...entries];
}