import { promises as fs } from 'fs'
import path from 'path'

async function rewriteContentlayerImports() {
  const generatedFilePath = path.join(process.cwd(), '.contentlayer', 'generated', 'index.mjs')
  try {
    const original = await fs.readFile(generatedFilePath, 'utf8')
    const replaced = original.replaceAll(" assert { type: 'json' }", " with { type: 'json' }")
    if (replaced !== original) {
      await fs.writeFile(generatedFilePath, replaced, 'utf8')
    }
  } catch (error) {
    // If the generated file doesn't exist yet or any error occurs, skip silently
  }
}

async function postbuild() {
  await rewriteContentlayerImports()
  const { default: rss } = await import('./rss.mjs')
  await rss()
}

postbuild()
