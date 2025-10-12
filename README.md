# mkfilep

Create a file and all non-existent parent directories in its path. Like `mkdir -p` combined with `touch`.

## Installation

### Using npx (no installation required)

```bash
npx mkfilep path/to/your/file.txt
```

### Global installation

```bash
npm install -g mkfilep
mkfilep path/to/your/file.txt
```

### Local installation

```bash
npm install mkfilep
```

## Usage

### CLI Usage

Create a file with nested directories:

```bash
# Create a deeply nested file
npx mkfilep path/to/deep/nested/file.txt

# Create a JavaScript component file
npx mkfilep src/components/Button/index.js

# Create a markdown file in docs
npx mkfilep ./docs/api/readme.md

# Works with absolute paths too
npx mkfilep /tmp/test/data/output.json
```

You can also use the alternative command name:

```bash
npx create-file-in-path path/to/file.txt
```

### Programmatic API

Use mkfilep in your Node.js/TypeScript code:

```typescript
import { createFileInPath } from 'mkfilep';

async function example() {
  try {
    const filePath = await createFileInPath('path/to/your/file.txt');
    console.log(`File created at: ${filePath}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

example();
```

Or with CommonJS:

```javascript
const { createFileInPath } = require('mkfilep');

async function example() {
  try {
    const filePath = await createFileInPath('path/to/your/file.txt');
    console.log(`File created at: ${filePath}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

example();
```

## Features

- ✓ **Zero dependencies** - Uses only Node.js built-in modules
- ✓ **Cross-platform** - Works on Windows, macOS, and Linux
- ✓ **Recursive directory creation** - Creates all parent directories automatically
- ✓ **Safe** - Won't overwrite existing files
- ✓ **Flexible paths** - Supports both relative and absolute paths
- ✓ **Clear error messages** - Helpful feedback when something goes wrong
- ✓ **Dual command names** - Use `mkfilep` or `create-file-in-path`
- ✓ **Modern TypeScript** - Written in TypeScript with full type definitions
- ✓ **ES Modules** - Uses modern ES module syntax

## Options

### CLI Flags

| Flag | Description |
|------|-------------|
| `-h`, `--help` | Display help message with usage examples |
| `-v`, `--version` | Display package version |

### API

#### `createFileInPath(filePath)`

Creates a file and all non-existent parent directories in its path.

**Parameters:**
- `filePath` (string): The path to the file to create (relative or absolute)

**Returns:**
- `Promise<string>`: Resolves with the absolute path of the created file

**Throws:**
- `Error`: If the input is invalid or file creation fails

**Example:**

```typescript
import { createFileInPath } from 'mkfilep';

// Using async/await
async function createFile() {
  const path = await createFileInPath('src/utils/helper.js');
  console.log(path); // /absolute/path/to/src/utils/helper.js
}

// Using promises
createFileInPath('data/output.json')
  .then(path => console.log(`Created: ${path}`))
  .catch(err => console.error(err.message));
```

## Development

This project is written in TypeScript. To contribute:

```bash
# Clone the repository
git clone https://github.com/tushkiz/mkfilep.git
cd mkfilep

# Install dependencies
npm install

# Build the project
npm run build

# The compiled JavaScript will be in the dist/ directory
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
