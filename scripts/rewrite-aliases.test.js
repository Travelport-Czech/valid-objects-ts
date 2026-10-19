const assert = require('node:assert/strict')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { execFileSync } = require('node:child_process')
const test = require('node:test')

test('rewrites only module aliases at each depth and is idempotent', () => {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'valid-objects-aliases-'))
  try {
    fs.mkdirSync(path.join(fixture, 'scripts'))
    fs.mkdirSync(path.join(fixture, 'dist/nested/deeper'), { recursive: true })
    fs.copyFileSync(__filename.replace('.test.js', '.js'), path.join(fixture, 'scripts/rewrite-aliases.js'))
    fs.symlinkSync(path.resolve(__dirname, '../node_modules'), path.join(fixture, 'node_modules'), 'dir')
    const input = [
      "import value from '@/value'",
      'export { value } from "@/value"',
      "const value = require('@/value')",
      "const lazy = import('@/value')",
      "const text = '@/value'",
      "const object = { '@/value': '@/value' }",
      "const relative = require('./value')",
      '// require(\'@/value\')',
    ].join('\n')
    const rootFile = path.join(fixture, 'dist/index.js')
    const nestedFile = path.join(fixture, 'dist/nested/deeper/index.d.ts')
    fs.writeFileSync(rootFile, input)
    fs.writeFileSync(nestedFile, input)
    const run = () => execFileSync(process.execPath, [path.join(fixture, 'scripts/rewrite-aliases.js')])
    run()
    const expected = prefix => input.split('\n').map((line, index) =>
      index < 4 ? line.replace('@/value', prefix + 'value') : line).join('\n')
    assert.equal(fs.readFileSync(rootFile, 'utf8'), expected('./'))
    assert.equal(fs.readFileSync(nestedFile, 'utf8'), expected('./../../'))
    run()
    assert.equal(fs.readFileSync(rootFile, 'utf8'), expected('./'))
    assert.equal(fs.readFileSync(nestedFile, 'utf8'), expected('./../../'))
  } finally {
    fs.rmSync(fixture, { recursive: true, force: true })
  }
})
