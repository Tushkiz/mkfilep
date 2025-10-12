#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createFileInPath } from "./index.js";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get package version
const packageJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../package.json"), "utf8"),
) as { version: string };
const version = packageJson.version;

// Parse command line arguments
const args = process.argv.slice(2);

// Help text
const helpText = `
mkfilep - Create a file and all non-existent parent directories in its path

USAGE:
  npx mkfilep <file-path>
  mkfilep <file-path>

OPTIONS:
  -h, --help       Display this help message
  -v, --version    Display package version

EXAMPLES:
  npx mkfilep path/to/your/new/file.txt
  npx mkfilep src/components/Button/index.js
  npx mkfilep ./docs/api/readme.md

DESCRIPTION:
  Creates a file at the specified path, automatically creating all
  parent directories that don't exist. Similar to 'mkdir -p' combined
  with 'touch'. Will not overwrite existing files.

FEATURES:
  ✓ Creates nested directory structures
  ✓ Works with relative and absolute paths
  ✓ Cross-platform (Windows, macOS, Linux)
  ✓ Won't overwrite existing files
  ✓ Zero dependencies
`;

// Check for flags
if (args.length === 0 || args.includes("-h") || args.includes("--help")) {
    console.log(helpText);
    process.exit(0);
}

if (args.includes("-v") || args.includes("--version")) {
    console.log(`v${version}`);
    process.exit(0);
}

// Get the file path (first non-flag argument)
const filePath = args[0];

if (!filePath) {
    console.error("✗ Error: No file path provided");
    console.error("\nUsage: npx mkfilep <file-path>");
    console.error('Run "npx mkfilep --help" for more information');
    process.exit(1);
}

// Create the file
(async () => {
    try {
        const absolutePath = await createFileInPath(filePath);
        console.log(`✓ Successfully created: ${absolutePath}`);
        process.exit(0);
    } catch (error) {
        const err = error as Error;
        console.error(`✗ Error: ${err.message}`);
        process.exit(1);
    }
})();
