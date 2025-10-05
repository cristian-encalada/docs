const fs = require('fs')
const path = require('path')

const generatedPath = path.join(__dirname, '..', '.contentlayer', 'generated')
const cachePath = path.join(__dirname, '..', '.contentlayer', '.cache')
const fileExtension = '.mjs'

console.log('Fixing Contentlayer assert syntax...')

if (!fs.existsSync(generatedPath) && !fs.existsSync(cachePath)) {
  console.log('Contentlayer directories not found, skipping...')
  process.exit(0)
}

function findMjsFiles(dir) {
  const files = []
  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      files.push(...findMjsFiles(fullPath))
    } else if (path.extname(item) === fileExtension) {
      files.push(fullPath)
    }
  }

  return files
}

// Process both generated and cache directories
const allMjsFiles = []
if (fs.existsSync(generatedPath)) {
  allMjsFiles.push(...findMjsFiles(generatedPath))
}
if (fs.existsSync(cachePath)) {
  allMjsFiles.push(...findMjsFiles(cachePath))
}

let filesModified = 0

allMjsFiles.forEach((filePath) => {
  const relativePath = path.relative(process.cwd(), filePath)

  try {
    const data = fs.readFileSync(filePath, 'utf8')
    const hasAssert = data.includes("assert { type: 'json' }")

    if (hasAssert) {
      console.log(`File ${relativePath}: has assert = ${hasAssert}`)
    }

    const result = data.replace(/assert { type: 'json' }/g, "with { type: 'json' }")

    if (data !== result) {
      fs.writeFileSync(filePath, result, 'utf8')
      filesModified++
      console.log(`Fixed assert syntax in: ${relativePath}`)
    }
  } catch (err) {
    console.log(`Unable to process file ${relativePath}: ${err.message}`)
  }
})

console.log(`Contentlayer fix complete. Modified ${filesModified} files.`)
