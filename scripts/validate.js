#!/usr/bin/env node
/**
 * Validates that all locale JSON files have the same keys as en.json and no empty values.
 */
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dataDir = new URL('../data/', import.meta.url).pathname;
const files = readdirSync(dataDir).filter(f => f.endsWith('.json'));

const enData = JSON.parse(readFileSync(join(dataDir, 'en.json'), 'utf8'));
const enKeys = Object.keys(enData);
let errors = 0;

for (const file of files) {
  const parsed = JSON.parse(readFileSync(join(dataDir, file), 'utf8'));
  const keys = Object.keys(parsed);

  // Check for missing keys
  const missing = enKeys.filter(k => !keys.includes(k));
  if (missing.length > 0) {
    console.error(`${file}: missing ${missing.length} keys: ${missing.slice(0, 3).join(', ')}...`);
    errors++;
  }

  // Check for extra keys
  const extra = keys.filter(k => !enKeys.includes(k));
  if (extra.length > 0) {
    console.error(`${file}: has ${extra.length} extra keys: ${extra.slice(0, 3).join(', ')}...`);
    errors++;
  }

  // Check for empty values
  const empty = Object.entries(parsed).filter(([, v]) => !v || String(v).trim() === '');
  if (empty.length > 0) {
    console.error(`${file}: has ${empty.length} empty values: ${empty.slice(0, 3).map(([k]) => k).join(', ')}...`);
    errors++;
  }
}

if (errors === 0) {
  console.log(`✓ All ${files.length} locale files validated successfully (${enKeys.length} keys each)`);
} else {
  console.error(`\n✗ ${errors} validation errors found`);
  process.exit(1);
}
