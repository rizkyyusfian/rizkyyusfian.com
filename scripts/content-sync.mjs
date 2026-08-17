import { access, cp, lstat, mkdir, readdir, rm } from 'node:fs/promises';
import { constants } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
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

async function countMarkdown(path) {
  const entries = await readdir(path, { recursive: true, withFileTypes: true });
  return entries.filter((entry) => entry.isFile() && markdown.test(entry.name)).length;
}

export async function syncContent({ sourceRoot, targetRoot }) {
  if (!(await exists(sourceRoot))) {
    throw new Error(`Content source directory does not exist: ${sourceRoot}`);
  }

  for (const section of ['blog', 'gist']) {
    if (!(await exists(join(sourceRoot, section)))) {
      throw new Error(`Missing content directory: ${section}`);
    }
  }

  const blog = await countMarkdown(join(sourceRoot, 'blog'));
  const gist = await countMarkdown(join(sourceRoot, 'gist'));

  if (blog === 0) {
    throw new Error('No blog MDX files found; refusing to build an empty site.');
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

  return { blog, gist };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const sourceRoot = resolve(
    projectRoot,
    process.env.CONTENT_SOURCE_DIR || '../rizkyyusfian.com-content',
  );
  const targetRoot = join(projectRoot, '.content');
  const result = await syncContent({ sourceRoot, targetRoot });
  console.log(`Synced ${result.blog} blog entries and ${result.gist} gist entries.`);
}
