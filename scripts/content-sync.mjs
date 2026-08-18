import { access, cp, lstat, mkdir, readdir, rm } from 'node:fs/promises';
import { constants } from 'node:fs';
import { basename, dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const markdown = /\.(md|mdx)$/i;

async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function listMarkdown(path) {
  const entries = await readdir(path, { recursive: true, withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && markdown.test(entry.name))
    .map((entry) => relative(path, join(entry.parentPath, entry.name)))
    .sort();
}

export async function syncContent({ sourceRoot, targetRoot }) {
  if (!(await exists(sourceRoot))) {
    throw new Error(`Content source directory does not exist: ${sourceRoot}`);
  }

  for (const section of ['blog', 'notes', 'gist']) {
    if (!(await exists(join(sourceRoot, section)))) {
      throw new Error(`Missing content directory: ${section}`);
    }
  }

  const blogEntries = await listMarkdown(join(sourceRoot, 'blog'));
  const noteEntries = await listMarkdown(join(sourceRoot, 'notes'));
  const gistEntries = await listMarkdown(join(sourceRoot, 'gist'));
  const duplicateWritingEntries = blogEntries.filter((entry) => noteEntries.includes(entry));

  if (blogEntries.length + noteEntries.length === 0) {
    throw new Error('No blog or note MDX files found; refusing to build an empty site.');
  }

  if (duplicateWritingEntries.length > 0) {
    throw new Error(
      `Duplicate writing filenames found in blog and notes: ${duplicateWritingEntries.join(', ')}`,
    );
  }

  await rm(targetRoot, { recursive: true, force: true });
  await mkdir(targetRoot, { recursive: true });

  for (const section of ['blog', 'gist']) {
    await cp(join(sourceRoot, section), join(targetRoot, section), {
      recursive: true,
      filter: async (path) => {
        const name = basename(path);
        if (name.startsWith('.')) return false;
        return (await lstat(path)).isDirectory() || markdown.test(name);
      },
    });
  }

  await cp(join(sourceRoot, 'notes'), join(targetRoot, 'blog'), {
    recursive: true,
    filter: async (path) => {
      const name = basename(path);
      if (name.startsWith('.')) return false;
      return (await lstat(path)).isDirectory() || markdown.test(name);
    },
  });

  return { blog: blogEntries.length, notes: noteEntries.length, gist: gistEntries.length };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const sourceRoot = resolve(
    projectRoot,
    process.env.CONTENT_SOURCE_DIR || '../rizkyyusfian.com-content',
  );
  const targetRoot = join(projectRoot, '.content');
  const result = await syncContent({ sourceRoot, targetRoot });
  console.log(
    `Synced ${result.blog} blog entries, ${result.notes} note entries, and ${result.gist} gist entries.`,
  );
}
