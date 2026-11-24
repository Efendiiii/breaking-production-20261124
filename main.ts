import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I pushed to production at 3 a.m. because the tests passed in a dream I had, and honestly, the dream was very convincing.";

if (TEXT.length < 1 || TEXT.length > 180) {
  throw new Error(`entry must be 1-180 chars, got ${TEXT.length}`);
}

if (TEXT.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
