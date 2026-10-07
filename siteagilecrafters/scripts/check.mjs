import { readdir, readFile, access } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const files = (await readdir(root)).filter(f => f.endsWith(".html"));
const errors = [];
for (const file of files) {
  const html = await readFile(join(root, file), "utf8");
  if (!html.includes("<title>")) errors.push(`${file}: missing title`);
  if (!html.includes('name="viewport"')) errors.push(`${file}: missing viewport`);
  if (!html.includes('id="main"')) errors.push(`${file}: missing main landmark`);
  for (const match of html.matchAll(/href="([^"#?]+\.html)(?:#[^"]*)?"/g)) {
    try { await access(join(root, match[1])); } catch { errors.push(`${file}: broken link ${match[1]}`); }
  }
}
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`Validated ${files.length} HTML pages and local links.`);
