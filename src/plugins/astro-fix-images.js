import fs from "fs";
import path from "path";

export default function fixImageLoadPlugin() {
  return {
    name: "fix-image-load",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const filePath = path.normalize(
          path.join(dir.pathname, "../server/pages/_image.astro.mjs").slice(1)
        );

        try {
          let fileContent = fs.readFileSync(filePath, "utf-8");

          // Replace the line in question with your fix
          fileContent = fileContent.replace(
            /return void 0;/,
            `const tempURL = new URL(url); tempURL.pathname = src; return await loadRemoteImage(tempURL);`
          );

          // Write the modified content back to the file
          fs.writeFileSync(filePath, fileContent, "utf-8");
          console.log("Applied custom fix to _image.astro.mjs");
        } catch (err) {
          console.error(
            `Failed to apply fix to _image.astro.mjs: ${err.message}`
          );
        }
      },
    },
  };
}
