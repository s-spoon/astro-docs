import { visit } from "unist-util-visit";
// import { slug as slugify } from "github-slugger";
import { join as joinPaths, normalize as normalizePaths } from "node:path"

function slugifyPart(part) {
  return (
    part
      // remove leading & trailing whitespace
      .trim()
      // replace spaces
      .replace(/\s+/g, '-')
      // remove special characters
      .replace(/[^A-Za-z0-9-]/g, '')
      // remove leading & trailing separators
      .replace(/^-+|-+$/g, '')
      // output lowercase
      .toLowerCase()
  )
}
function slugify(part) {
  return part
    .trim()
    .split('/').map((part) => {
      return part !== '..' ? slugifyPart(part) : part;
    })
    .join('/');
}

export default (base, prefixRel = "") =>
  function remarkProcessLinks() {
    return (tree, vfile) => {
      visit(tree, node => {
        // Handle links and images (or any node with a `url` property)
        if (node.type === "link" || node.type === "image") {
          let [pathname, hash] = node.url.split('#');

          // Check if URI is a special-variant
          if (pathname.startsWith("//")) {
            node.url = `${base}${pathname.slice(2)}#${hash || ''}`
            return;
          }

          // Check if the URI is an absolute URI
          if (pathname.startsWith("/")) {
            // Absolute URIs (starting with /) are kept as-is
            node.url = `${base}${pathname.slice(1)}#${hash || ''}`;
            return;
          }

          if (!pathname.startsWith("http://") && !pathname.startsWith("https://")) {
            if (pathname.endsWith(".md")) {
              // Case 1: URI references another Markdown file
              const slug = slugify(decodeURIComponent(pathname.replace(".md", "")));
              node.url = `${prefixRel}../${slug}/${hash ? '#' + hash : ''}`;
            } else {
              // Case 2: Other relative URIs (like images or other assets), only in production
              // if (import.meta.env.PROD) node.url = `../${uri}`;
              // node.url = `${import.meta.env.BASE_URL}${pathname}`;
              if (prefixRel)
                node.url = `${base}xyz/${prefixRel}../${pathname}`;
              else if (vfile.path) {
                // const docPath = vfile.path.split('docs\\')[1];
                const matches = vfile.path.match(/docs\\(.+?)\\(.+)\\/);
                
                if (!matches) return;

                const [_, appShort, currPath] = matches;
                const finalLink = normalizePaths(`${base}${appShort}/${joinPaths(currPath,pathname)}`).replaceAll('\\', '/');

                node.url = finalLink;
              }
            }
          }
        }
      });
    };
  };
