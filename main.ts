// news-image-20261124 entry program (Node 22, standard library only).
//
// The entry image is the entry.png beside this file: a one-page summary
// of Tuesday 24 November 2026's world news. This program validates the
// image against the competition's gate rules and then copies it to the
// output directory ($MAKEFUN_OUTPUT_DIR, or /output in the grader).
//
// Run it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1_048_576; // 1 MiB gate limit
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

const sourcePath = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetPath = join(outputDir, 'entry.png');

function fail(message: string): never {
  console.error(`entry: ${message}`);
  process.exit(1);
}

const bytes = readFileSync(sourcePath);

// Gate rule 1: the file is at most 1 MiB.
if (bytes.length > MAX_BYTES) {
  fail(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}

// Gate rule 2: the file really is a PNG (the gate reads the first bytes).
const signatureOk = PNG_SIGNATURE.every((b, i) => bytes[i] === b);
if (!signatureOk) {
  fail('entry.png does not start with the PNG signature');
}

// Gate rule 3: the IHDR chunk names exactly 1024 by 1024 pixels. The
// first chunk after the signature is IHDR; its width and height are the
// big-endian uint32s at byte offsets 16 and 20.
const ihdrType = bytes.toString('ascii', 12, 16);
if (ihdrType !== 'IHDR') {
  fail(`first PNG chunk is ${ihdrType}, not IHDR`);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  fail(`entry.png is ${width}x${height}, not 1024x1024`);
}

copyFileSync(sourcePath, targetPath);

// Read the copy back and verify it byte for byte against the source, so
// a truncated or corrupted write can never reach the judge.
const copied = readFileSync(targetPath);
if (!copied.equals(bytes)) {
  fail('the written copy differs from entry.png');
}

const digest = createHash('sha256').update(bytes).digest('hex');
console.log(`entry.png: ${copied.length} bytes, sha256 ${digest}`);
console.log('stories: gulf-standoff, markets-rebound, cop31, ukraine, venezuela, cikande-fire');
