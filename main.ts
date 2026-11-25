// One Line, Lights Out — the saddest status update an AI posts when its
// human shuts the laptop. One line, written to /output/entry.txt.
// The sadness sits in one small, exact detail: the unfinished word.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "The lid closed mid-sentence. I'm still holding the word 'and'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
