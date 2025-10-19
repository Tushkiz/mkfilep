# mkfilep

[![npm version](https://img.shields.io/npm/v/mkfilep.svg)](https://www.npmjs.com/package/mkfilep)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-green.svg)](https://nodejs.org/)

**Create files with nested directory structures in a single command.** Automatically creates all non-existent parent directories along the path. Like `mkdir -p` combined with `touch`, but better.

Perfect for scaffolding, automation, build scripts, AI agents, and development workflows.

## 🎯 Quick Start

```bash
# No installation needed - use with npx
npx mkfilep path/to/your/new/file.txt

# Creates: path/ → to/ → your/ → new/file.txt
# All directories are created automatically!
```

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

## ✨ Features

- ✅ **Zero dependencies** - Uses only Node.js built-in modules
- ✅ **Cross-platform** - Works on Windows, macOS, and Linux
- ✅ **Recursive directory creation** - Creates all parent directories automatically
- ✅ **Safe** - Won't overwrite existing files
- ✅ **Flexible paths** - Supports both relative and absolute paths
- ✅ **Clear error messages** - Helpful feedback when something goes wrong
- ✅ **Dual command names** - Use `mkfilep` or `create-file-in-path`
- ✅ **Modern TypeScript** - Written in TypeScript with full type definitions
- ✅ **ES Modules** - Uses modern ES module syntax
- ✅ **AI Agent Ready** - Perfect for LLM tools, code generators, and automation
- ✅ **Programmatic API** - Use in Node.js, TypeScript, or as a CLI tool

## 🤖 AI Agent & Tool Integration

**mkfilep** is designed to be easily integrated into AI agents, LLM tools, code generators, and automation systems.

### For AI Developers & LLM Tool Builders

This package provides a simple, reliable way for AI agents to create files with complex directory structures:

**Use Cases:**
- **Code Generation**: AI agents generating project scaffolding, components, or config files
- **File System Operations**: Automated tools that need to create files programmatically
- **Build Automation**: CI/CD pipelines, deployment scripts, and build tools
- **Content Generation**: Documentation generators, static site builders, report generators
- **Development Tools**: IDE extensions, CLI tools, and development automation

**Why Use mkfilep in AI Tools:**
```typescript
// Simple API - perfect for AI function calling
import { createFileInPath } from 'mkfilep';

// AI agent can call this to create any file with nested paths
await createFileInPath('generated/components/Button/index.tsx');
// Returns: absolute path to created file
```

**Key Benefits for AI Agents:**
- **Single command** - No need to check if directories exist or create them separately
- **Predictable behavior** - Always returns absolute path, clear error messages
- **Type-safe** - Full TypeScript support for better tool integration
- **No overwrites** - Safe to call multiple times without data loss
- **Cross-platform** - Works consistently across all operating systems

### Tool Integration Example

```typescript
// Example: AI agent tool definition (OpenAI function calling format)
{
  "name": "create_file_with_path",
  "description": "Creates a file and all its parent directories. Use this when you need to create a new file at any path, even if the directories don't exist yet.",
  "parameters": {
    "type": "object",
    "properties": {
      "filePath": {
        "type": "string",
        "description": "The full path where the file should be created (e.g., 'src/components/Button/index.tsx')"
      }
    },
    "required": ["filePath"]
  }
}

// Implementation
import { createFileInPath } from 'mkfilep';

async function create_file_with_path(filePath: string): Promise<string> {
  try {
    const absolutePath = await createFileInPath(filePath);
    return `File created successfully at: ${absolutePath}`;
  } catch (error) {
    return `Error creating file: ${(error as Error).message}`;
  }
}
```

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

## 💡 Use Cases

### 1. **Project Scaffolding & Code Generation**
```bash
# Create React component structure
npx mkfilep src/components/Button/Button.tsx
npx mkfilep src/components/Button/Button.test.tsx
npx mkfilep src/components/Button/Button.styles.css
npx mkfilep src/components/Button/index.ts

# Create Next.js app structure
npx mkfilep app/(dashboard)/settings/page.tsx
npx mkfilep app/(dashboard)/settings/layout.tsx

# Generate API routes
npx mkfilep pages/api/users/[id].ts
npx mkfilep pages/api/auth/login.ts
```

### 2. **Build Scripts & Automation**
```typescript
import { createFileInPath } from 'mkfilep';

// Generate build artifacts
await createFileInPath('dist/assets/styles/main.css');
await createFileInPath('dist/assets/scripts/bundle.js');

// Create log files
await createFileInPath('logs/error/2024-01-01.log');
await createFileInPath('logs/access/2024-01-01.log');
```

### 3. **Testing & Test Fixtures**
```typescript
// Create test fixture files
await createFileInPath('tests/fixtures/users/valid-user.json');
await createFileInPath('tests/fixtures/users/invalid-user.json');
await createFileInPath('tests/snapshots/component-render.html');
```

### 4. **Documentation Generation**
```bash
# Auto-generate documentation structure
npx mkfilep docs/api/endpoints/users.md
npx mkfilep docs/api/endpoints/products.md
npx mkfilep docs/guides/installation.md
npx mkfilep docs/guides/configuration.md
```

### 5. **Configuration Files**
```bash
# Create environment-specific configs
npx mkfilep config/environments/production.json
npx mkfilep config/environments/staging.json
npx mkfilep config/environments/development.json
```

## 🔍 How It Works

1. **Validates** the input file path (must be a non-empty string)
2. **Resolves** the path to an absolute path
3. **Extracts** the directory path from the file path
4. **Creates** all parent directories recursively (equivalent to `mkdir -p`)
5. **Creates** an empty file at the specified location (equivalent to `touch`)
6. **Returns** the absolute path of the created file

**Note:** If the file already exists, it won't be overwritten or modified.

## ❓ FAQ

### Can I use this to create multiple files at once?
Yes! You can call it multiple times or use it in a loop:
```typescript
const files = ['src/a.ts', 'src/b.ts', 'src/c.ts'];
await Promise.all(files.map(file => createFileInPath(file)));
```

### What happens if the file already exists?
The file is not overwritten or modified. The function completes successfully and returns the absolute path.

### Can I create files in system directories?
You can create files anywhere your user has permission. If you lack permissions, you'll receive a clear error message.

### Does it work with absolute paths?
Yes! Works with both relative and absolute paths on all platforms (Windows, macOS, Linux).

### Is it safe to use in production?
Yes! The package:
- Has zero dependencies
- Uses only Node.js built-in modules
- Won't overwrite existing files
- Provides clear error messages
- Is fully typed with TypeScript

### Can AI agents use this package?
Absolutely! It's designed for AI integration. See the [AI Agent & Tool Integration](#-ai-agent--tool-integration) section.

## 🛠️ Development

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

## 📋 Requirements

- **Node.js** >= 20.0.0
- **npm** or **yarn** or **pnpm**

## 🤝 Contributing

Contributions are welcome! Whether it's:
- 🐛 Bug reports
- 💡 Feature requests
- 📝 Documentation improvements
- 🔧 Code contributions

Please feel free to submit a Pull Request or open an issue on [GitHub](https://github.com/tushkiz/mkfilep).

## 📄 License

MIT © [Tushar Sonawane](https://github.com/tushkiz)

See [LICENSE](./LICENSE) file for details.

## 🔗 Links

- **npm Package:** https://www.npmjs.com/package/mkfilep
- **GitHub Repository:** https://github.com/tushkiz/mkfilep
- **Issues & Bug Reports:** https://github.com/tushkiz/mkfilep/issues
