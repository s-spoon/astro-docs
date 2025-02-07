import { promises as fs, createWriteStream, createReadStream } from 'fs';
import path from 'path';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipe = promisify(pipeline);

/**
 * Copy and compress the `assets` folder from each app in `src/content/docs` to the build output.
 */
export default function copyAssets() {
  return {
    name: 'copy-assets-integration',
    hooks: {
      // Hook into the 'astro:build:done' event
      'astro:build:done': async ({ dir }) => {
        const sourceRoot = path.join(process.cwd(), 'src', 'content', 'docs');
        const destinationRoot = path.join(dir.pathname, '..', 'docs').slice(1);

        console.log({ sourceRoot, destinationRoot });

        // Read the directories in 'src/content/docs' to get each app
        const apps = await fs.readdir(sourceRoot, { withFileTypes: true });

        for (const app of apps) {
          if (app.isDirectory()) {
            console.log(`Processing: ${app.name}`);

            const assetsSourceDir = path.join(sourceRoot, app.name, 'assets');
            const assetsDestinationDir = path.join(destinationRoot, app.name, 'assets');

            console.log({ assetsSourceDir, assetsDestinationDir });

            // Check if the 'assets' folder exists
            try {
              await fs.access(assetsSourceDir);
              await copyAndCompressDirectory(assetsSourceDir, assetsDestinationDir);
              console.log(`Copied and compressed assets for app: ${app.name}`);
            } catch (err) {
              console.log(`No assets folder found for app: ${app.name}`);
              console.error(err);
            }
          }
        }
      },
    },
  };
}

/**
 * Recursively copy and compress a directory and its contents.
 * @param {string} source - The source directory path.
 * @param {string} destination - The destination directory path.
 */
async function copyAndCompressDirectory(source, destination) {
  await fs.mkdir(destination, { recursive: true });

  const entries = await fs.readdir(source, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name + '.gz'); // Save as .gz

    if (entry.isDirectory()) {
      await copyAndCompressDirectory(srcPath, path.join(destination, entry.name));
    } else {
      await compressFile(srcPath, destPath);
    }
  }
}

/**
 * Compress a file using gzip.
 * @param {string} src - The source file path.
 * @param {string} dest - The destination file path.
 */
async function compressFile(src, dest) {
  const gzip = createGzip();
  const sourceStream = createReadStream(src);
  const destStream = createWriteStream(dest);

  await pipe(sourceStream, gzip, destStream);
}
