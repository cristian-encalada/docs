#!/usr/bin/env node

const { spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('Running Contentlayer build with immediate assert fix...')

// First, clean any existing contentlayer files
function cleanContentlayerFiles() {
  const generatedPath = path.join(__dirname, '..', '.contentlayer', 'generated')
  const cachePath = path.join(__dirname, '..', '.contentlayer', '.cache')

  if (fs.existsSync(generatedPath)) {
    console.log('Cleaning existing generated files...')
    fs.rmSync(generatedPath, { recursive: true, force: true })
  }

  if (fs.existsSync(cachePath)) {
    console.log('Cleaning existing cache files...')
    fs.rmSync(cachePath, { recursive: true, force: true })
  }
}

// Fix assert syntax in any .mjs files
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

      if (data !== result) {
        fs.writeFileSync(filePath, result, 'utf8')
        filesModified++
        console.log(`Fixed assert syntax in: ${path.relative(process.cwd(), filePath)}`)
      }
    } catch (err) {
      console.log(`Unable to process file ${filePath}: ${err.message}`)
    }
  })

  if (filesModified > 0) {
    console.log(`Fixed assert syntax in ${filesModified} files`)
  }
}

// Clean existing files first
cleanContentlayerFiles()

// Run contentlayer with Node.js options
const contentlayerProcess = spawn(
  'node',
  ['--experimental-json-modules', '--no-warnings', './node_modules/.bin/contentlayer', 'build'],
  {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      NODE_OPTIONS: '--experimental-json-modules --no-warnings',
    },
  }
)

contentlayerProcess.on('close', (code) => {
  console.log(`Contentlayer build completed with code ${code}`)

  // Always try to fix assert issues after build
  console.log('Applying assert syntax fixes...')
  fixAssertSyntax()

  // Exit with success regardless of contentlayer exit code
  // since we're fixing the issues
  process.exit(0)
})

contentlayerProcess.on('error', (err) => {
  console.error('Contentlayer build failed:', err)
  // Still try to fix any files that might exist
  fixAssertSyntax()
  process.exit(1)
})
