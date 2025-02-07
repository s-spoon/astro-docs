import type { APIRoute } from "astro";
import { readFile, access as fsAccess } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { resolve } from "node:path";

import { createGunzip } from 'node:zlib';

import mime from "mime-types";

async function decompressedAsset(assetPath: string) {
  await fsAccess(assetPath);

  const gzipStream = createGunzip();
  const fileStream = createReadStream(assetPath);

  return fileStream.pipe(gzipStream);
}

export async function GET({ params, request }: Parameters<APIRoute>[0]) {
  const assetPath = decodeURI(params.asset!);
  const module = params.appName!;
  const path = 
    import.meta.env.PROD ? 
      resolve(`./docs/${module}/assets/`, assetPath + '.gz'):
      resolve(`src/content/docs/${module}/assets/`, assetPath);
  const supportsGzip = !!request.headers.get('accept-encoding')?.includes('gzip');

  try {
    const resolvedAsset = import.meta.env.PROD && !supportsGzip ? await decompressedAsset(path) : await readFile(path);
    const resHeaders = new Headers();

    resHeaders.set("Content-Type", mime.lookup(path.replace('.gz', '')) || "application/octet-stream");
    if (import.meta.env.PROD && supportsGzip)
      resHeaders.set("Content-Encoding", "gzip");

    return new Response(resolvedAsset as Buffer, {
      status: 200,
      headers: resHeaders,
    });
  } catch (err) {
    console.error(err);
    return new Response(null, { status: 404 });
  }
}
