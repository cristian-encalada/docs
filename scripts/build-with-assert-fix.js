#!/usr/bin/env node

const { spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('Building with aggressive assert fix...')

// Function to fix assert syntax in .mjs files
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
        .replace(/assert\s*{\s*type:\s*['"]json['"]\s*}/g, 'with { type: "json" }')
        .replace(/assert\s*\(\s*{\s*type:\s*['"]json['"]\s*}\s*\)/g, 'with { type: "json" }')
        .replace(/import\s+.*\s+from\s+.*\s+assert\s*{\s*type:\s*['"]json['"]\s*}/g, (match) => {
          return match.replace(/assert\s*{\s*type:\s*['"]json['"]\s*}/, 'with { type: "json" }')
        })

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

// Run contentlayer build
console.log('Running Contentlayer build...')
const contentlayerProcess = spawn(
  'node',
  ['--experimental-json-modules', '--no-warnings', './node_modules/.bin/contentlayer', 'build'],
  {
    stdio: 'pipe',
    shell: true,
    env: {
      ...process.env,
      NODE_OPTIONS: '--experimental-json-modules --no-warnings',
    },
  }
)

let output = ''
let errorOutput = ''

contentlayerProcess.stdout.on('data', (data) => {
  output += data.toString()
  process.stdout.write(data)
})

contentlayerProcess.stderr.on('data', (data) => {
  errorOutput += data.toString()
  process.stderr.write(data)
})

contentlayerProcess.on('close', (code) => {
  console.log(`Contentlayer build completed with code ${code}`)

  // Always try to fix assert issues after build
  console.log('Applying assert syntax fixes...')
  fixAssertSyntax()

  // Now run Next.js build
  console.log('Running Next.js build...')
  const nextProcess = spawn(
    'node',
    ['--experimental-json-modules', '--no-warnings', './node_modules/.bin/next', 'build'],
    {
      stdio: 'inherit',
      shell: true,
      env: {
        ...process.env,
        NODE_OPTIONS: '--experimental-json-modules --no-warnings',
      },
    }
  )

  nextProcess.on('close', (nextCode) => {
    console.log(`Next.js build completed with code ${nextCode}`)
    process.exit(nextCode)
  })

  nextProcess.on('error', (err) => {
    console.error('Next.js build failed:', err)
    process.exit(1)
  })
})

contentlayerProcess.on('error', (err) => {
  console.error('Contentlayer build failed:', err)
  // Still try to fix any files that might exist
  fixAssertSyntax()
  process.exit(1)
})
