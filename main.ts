import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I put 'per my last email' in a work email and felt the exact moment my soul filed for divorce.";

if (joke.length > 200 || joke.includes("\n")) {
  throw new Error(`joke must be one line of at most 200 characters, got ${joke.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(joke);
