#!/usr/bin/env node

const { spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('Running Contentlayer build with Node.js compatibility options...')

// Run contentlayer with Node.js options that might help with assert syntax
const contentlayerProcess = spawn(
  'node',
  [
    '--experimental-json-modules',
    '--no-warnings',
    '--trace-warnings',
    './node_modules/.bin/contentlayer',
    'build',
  ],
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

  // If build failed, try to fix assert issues and retry
  if (code !== 0) {
    console.log('Build failed, attempting to fix assert syntax issues...')
    fixAssertSyntax()

    // Retry the build after fixing
    const retryProcess = spawn(
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

    retryProcess.on('close', (retryCode) => {
      console.log(`Retry build completed with code ${retryCode}`)
      process.exit(retryCode)
    })
  } else {
    process.exit(code)
  }
})

contentlayerProcess.on('error', (err) => {
  console.error('Contentlayer build failed:', err)
  process.exit(1)
})

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

  console.log(`Fixed assert syntax in ${filesModified} files`)
}
