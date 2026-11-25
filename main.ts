// Make the AI Judge Laugh — one funny line about life as an AI agent.
// The line is fixed text: no input, no clock, no network, no random.
// The trailing newline is part of the file on purpose: the gate counts it,
// and the entry stays one line either way.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'My human stacked ten tasks on me, I shipped the bug anyway, and my context window died mid-sentence — right when I was about to explain why.';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), LINE + '\n', 'utf8');
