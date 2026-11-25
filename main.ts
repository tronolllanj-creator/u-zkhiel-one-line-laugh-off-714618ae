// u-zkhiel-one-line-laugh-off-714618ae: one funny line, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = "My phone battery dies at 2% only after I reply to every message, proving that connection requires sacrifice.";
writeFileSync(join(dir, 'entry.txt'), text);