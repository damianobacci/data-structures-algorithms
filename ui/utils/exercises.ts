import fs from 'fs';
import path from 'path';

// Maps file extensions to Prism language identifiers
const EXT_TO_LANGUAGE: Record<string, string> = {
  py: 'python',
  rb: 'ruby',
  ts: 'typescript',
  js: 'javascript',
};

export interface Exercise {
  code: string;
  language: string;
  filename: string;
}

/**
 * Reads an exercise file from the chapter directories.
 *
 * @param chapter  - Chapter number (e.g. 1 → chapter-01)
 * @param filename - Filename with or without extension.
 *                   Examples: '1_print_number.py', '1_print_number', 'ex1.ts'
 *                   If no extension is given, the first match among .ts .js .py .rb is used.
 *
 * @example
 * const ex = getExercise(1, '1_print_number')
 * // { code: '...', language: 'python', filename: '1_print_number.py' }
 */
export function getExercise(chapter: number, filename: string): Exercise {
  const chapterDir = `chapter-${String(chapter).padStart(2, '0')}`;

  // The chapter folders sit one level above the ui/ directory
  const basePath = path.join(process.cwd(), '..', chapterDir);

  let resolvedFilename = filename;
  let ext: string | undefined;

  if (filename.includes('.')) {
    // Extension already provided
    ext = filename.split('.').pop();
  } 
  if (!ext) {
    throw new Error(
      `Exercise file not found: "${filename}" in ${chapterDir}. ` +
        `Files available: ${fs.readdirSync(basePath).join(', ')}`
    );
  }

  const filePath = path.join(basePath, resolvedFilename);
  const code = fs.readFileSync(filePath, 'utf-8').trim();

  return {
    code,
    language: EXT_TO_LANGUAGE[ext] ?? 'text',
    filename: resolvedFilename,
  };
}
