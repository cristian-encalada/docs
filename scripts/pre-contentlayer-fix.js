#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log('Running pre-Contentlayer assert syntax fix...')

// This script runs before Contentlayer to fix any existing generated files
function fixAssertSyntax() {
  const generatedPath = path.join(__dirname, '..', '.contentlayer', 'generated')
  const cachePath = path.join(__dirname, '..', '.contentlayer', '.cache')

  function findMjsFiles(dir) {
    const files = []
    if (!fs.existsSync(dir)) return files

    const items = fs.readdirSync(dir)
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        files.push(...findMjsFiles(fullPath))
      } else if (path.extname(item) === '.mjs') {
        files.push(fullPath)
      }
    }
    return files
  }

  const allMjsFiles = [...findMjsFiles(generatedPath), ...findMjsFiles(cachePath)]

  let filesModified = 0

  allMjsFiles.forEach((filePath) => {
    try {
      const data = fs.readFileSync(filePath, 'utf8')
      let result = data
        .replace(/assert\s*{\s*type:\s*['"]json['"]\s*}/g, "with { type: 'json' }")
        .replace(/assert\s*\(\s*{\s*type:\s*['"]json['"]\s*}\s*\)/g, "with { type: 'json' }")
        .replace(/import\s+assert\s*{\s*type:\s*['"]json['"]\s*}/g, "import with { type: 'json' }")
        .replace(/assert\s*{\s*type:\s*['"]json['"]\s*}/g, "with { type: 'json' }")

      if (data !== result) {
        fs.writeFileSync(filePath, result, 'utf8')
        filesModified++
        console.log(`Fixed assert syntax in: ${path.relative(process.cwd(), filePath)}`)
      }
    } catch (err) {
      console.log(`Unable to process file ${filePath}: ${err.message}`)
    }
  })

  console.log(`Pre-Contentlayer fix complete. Modified ${filesModified} files.`)
}

// Run the fix
fixAssertSyntax()
