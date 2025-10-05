#!/usr/bin/env node

const { spawn } = require('child_process')

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
  process.exit(code)
})

contentlayerProcess.on('error', (err) => {
  console.error('Contentlayer build failed:', err)
  process.exit(1)
})
