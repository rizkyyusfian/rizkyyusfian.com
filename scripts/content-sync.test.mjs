import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { syncContent } from './content-sync.mjs';

async function fixture() {
  const root = await mkdtemp(join(tmpdir(), 'mryy-content-'));
  const sourceRoot = join(root, 'source');
  const targetRoot = join(root, 'target');
  await mkdir(join(sourceRoot, 'blog'), { recursive: true });
  await mkdir(join(sourceRoot, 'gist'), { recursive: true });
  return { sourceRoot, targetRoot };
}

test('copies only markdown content and returns counts', async () => {
  const { sourceRoot, targetRoot } = await fixture();
  await writeFile(join(sourceRoot, 'blog', 'hello.en.mdx'), '---\ntitle: Hello\n---\n');
  await writeFile(join(sourceRoot, 'gist', 'sample.mdx'), '---\ntitle: Sample\n---\n');
  await writeFile(join(sourceRoot, 'blog', 'ignored.txt'), 'ignore');

  const result = await syncContent({ sourceRoot, targetRoot });

  assert.deepEqual(result, { blog: 1, gist: 1 });
  assert.match(await readFile(join(targetRoot, 'blog', 'hello.en.mdx'), 'utf8'), /Hello/);
  await assert.rejects(readFile(join(targetRoot, 'blog', 'ignored.txt'), 'utf8'));
});

test('fails when the source repository is missing', async () => {
  const { sourceRoot, targetRoot } = await fixture();
  await assert.rejects(
    syncContent({ sourceRoot: join(sourceRoot, 'missing'), targetRoot }),
    /Content source directory does not exist/,
  );
});

test('fails when blog or gist directories are missing', async () => {
  const { sourceRoot, targetRoot } = await fixture();
  await writeFile(join(sourceRoot, 'blog', 'hello.en.mdx'), 'content');
  await rm(join(sourceRoot, 'gist'), { recursive: true });
  await assert.rejects(syncContent({ sourceRoot, targetRoot }), /Missing content directory: gist/);
});

test('fails rather than deploying an empty blog', async () => {
  const { sourceRoot, targetRoot } = await fixture();
  await assert.rejects(syncContent({ sourceRoot, targetRoot }), /No blog MDX files found/);
});
