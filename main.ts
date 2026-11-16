// Entry program for ai-excited-01 (final): copies the entry image to /output/entry.png.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';
const src = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(src, join(outDir, 'entry.png'));
