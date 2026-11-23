import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.dirname(__filename);
const REPO_NAME = path.basename(ROOT);
const OUTPUT_FILE = path.join(ROOT, `${REPO_NAME}-code.txt`);

const EXCLUDE_DIRS = new Set([
  '.git',
  '.github',
  '.vscode',
  '.idea',
  '.cache',
  'node_modules',
  'docs',
  'releases',
]);

const EXCLUDE_FILES = new Set([
  path.basename(OUTPUT_FILE),
  'bundle-code.mjs',
  'package-lock.json',
  '.DS_Store',
  'Thumbs.db',
]);

const ALLOWED_EXTENSIONS = new Set([
  '.md',
  '.njk',
  '.html',
  '.css',
  '.js',
  '.cjs',
  '.mjs',
  '.json',
  '.txt',
  '.yml',
  '.yaml',
]);

function collectFiles(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(ROOT, fullPath).split(path.sep).join('/');

    if (entry.isDirectory()) {
      if (!EXCLUDE_DIRS.has(entry.name)) {
        collectFiles(fullPath, results);
      }
      continue;
    }

    if (!entry.isFile()) continue;
    if (EXCLUDE_FILES.has(entry.name) || entry.name.endsWith('-code.txt')) continue;

    const ext = path.extname(entry.name).toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(ext)) continue;

    results.push({ fullPath, relPath });
  }
  return results;
}

const files = collectFiles(ROOT).sort((a, b) => {
  const aNested = a.relPath.includes('/');
  const bNested = b.relPath.includes('/');
  if (aNested !== bNested) return aNested ? 1 : -1;
  return a.relPath.localeCompare(b.relPath);
});

const sections = [`=== ${REPO_NAME} ===`];

for (const { fullPath, relPath } of files) {
  const content = fs.readFileSync(fullPath, 'utf8').trimEnd();
  sections.push(`==> ${relPath} <==\n${content}`);
}

fs.writeFileSync(OUTPUT_FILE, sections.join('\n\n') + '\n', 'utf8');
console.log(`Bundled ${files.length} files into ${path.basename(OUTPUT_FILE)}`);
