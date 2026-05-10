import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.resolve(__dirname, "..", "dist", "client");
const assetsDir = path.join(clientDir, "assets");

function findEntryChunk(indexFiles) {
  /** @type {Set<string>} */
  const imported = new Set();
  for (const f of indexFiles) {
    const head = fs.readFileSync(path.join(assetsDir, f), "utf8").slice(0, 8192);
    const re = /from"\.\/(index-[^"]+\.js)"/g;
    let m;
    while ((m = re.exec(head))) imported.add(m[1]);
  }
  const entryCandidates = indexFiles.filter((f) => !imported.has(f));
  if (entryCandidates.length === 1) return entryCandidates[0];
  if (entryCandidates.length === 0) {
    throw new Error(
      `[write-client-index-html] Could not determine entry among: ${indexFiles.join(", ")}`,
    );
  }
  entryCandidates.sort(
    (a, b) =>
      fs.statSync(path.join(assetsDir, b)).size - fs.statSync(path.join(assetsDir, a)).size,
  );
  return entryCandidates[0];
}

function main() {
  if (!fs.existsSync(assetsDir)) {
    throw new Error(`[write-client-index-html] Missing ${assetsDir} — run vite build first.`);
  }

  const indexFiles = fs
    .readdirSync(assetsDir)
    .filter((f) => f.startsWith("index-") && f.endsWith(".js"));
  if (indexFiles.length === 0) {
    throw new Error(`[write-client-index-html] No index-*.js chunks in ${assetsDir}.`);
  }

  const entry = findEntryChunk(indexFiles);
  // Vite may emit `styles-*.css` or `index-*.css` depending on the graph; link every CSS asset.
  const styleFiles = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".css"));

  const linkTags = styleFiles
    .map((f) => `    <link rel="stylesheet" href="/assets/${f}" />`)
    .join("\n");

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Worthy Studios — Wear Your Worth | Streetwear from Dar es Salaam</title>
    <meta
      name="description"
      content="Worthy Studios is a premium streetwear brand from Dar es Salaam, Tanzania. Tees, caps, and accessories crafted for identity, culture, and self-worth."
    />
    <meta property="og:title" content="Worthy Studios — Wear Your Worth" />
    <meta property="og:description" content="Premium streetwear from Dar es Salaam." />
    <meta property="og:type" content="website" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
${linkTags ? `${linkTags}\n` : ""}  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${entry}"></script>
  </body>
</html>
`;

  fs.writeFileSync(path.join(clientDir, "index.html"), html, "utf8");
  console.log(`[write-client-index-html] Wrote dist/client/index.html (entry: ${entry}).`);
}

main();
