import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * Creates a file and all non-existent parent directories in its path
 * @param filePath - The path to the file to create
 * @returns Resolves with the absolute path of the created file
 * @throws Error if the input is invalid or file creation fails
 */
export async function createFileInPath(filePath: string): Promise<string> {
	// Validate input
	if (typeof filePath !== "string") {
		throw new Error("File path must be a string");
	}

	if (!filePath || filePath.trim() === "") {
		throw new Error("File path cannot be empty");
	}

	try {
		// Resolve to absolute path
		const absolutePath = path.resolve(filePath);

		// Get the directory path
		const dirPath = path.dirname(absolutePath);

		// Create all parent directories recursively
		await fs.mkdir(dirPath, { recursive: true });

		// Create the file without overwriting if it exists
		// Using 'a' flag (append mode) which creates the file if it doesn't exist
		// but doesn't truncate it if it does exist
		await fs.writeFile(absolutePath, "", { flag: "a" });

		return absolutePath;
	} catch (error) {
		// Provide more descriptive error messages
		const err = error as NodeJS.ErrnoException;
		
		if (err.code === "EACCES") {
			throw new Error(`Permission denied: Cannot create file at ${filePath}`);
		} else if (err.code === "ENOTDIR") {
			throw new Error(
				`Invalid path: A component of the path is not a directory`,
			);
		} else if (err.code === "EEXIST") {
			throw new Error(`Path exists as a directory: ${filePath}`);
		} else {
			throw new Error(`Failed to create file: ${err.message}`);
		}
	}
}
