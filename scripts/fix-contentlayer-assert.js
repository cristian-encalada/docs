const fs = require('fs')
const path = require('path')

const directoryPath = path.join(__dirname, '..', '.contentlayer', 'generated')
const fileExtension = '.mjs'

console.log('Fixing Contentlayer assert syntax...')

if (!fs.existsSync(directoryPath)) {
  console.log('Contentlayer generated directory not found, skipping...')
  process.exit(0)
}

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Unable to scan directory: ' + err)
    return
  }

  let filesProcessed = 0
  let filesModified = 0

  files.forEach((file) => {
    if (path.extname(file) === fileExtension) {
      const filePath = path.join(directoryPath, file)

      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.log('Unable to read file: ' + err)
          return
        }

        const originalData = data
        const result = data.replace(/assert { type: 'json' }/g, "with { type: 'json' }")

        if (originalData !== result) {
          fs.writeFile(filePath, result, 'utf8', (err) => {
            if (err) {
              console.log('Unable to write file: ' + err)
              return
            }
            filesModified++
            console.log(`Fixed assert syntax in: ${file}`)
          })
        }

        filesProcessed++
        if (filesProcessed === files.filter((f) => path.extname(f) === fileExtension).length) {
          console.log(`Contentlayer fix complete. Modified ${filesModified} files.`)
        }
      })
    }
  })
})
