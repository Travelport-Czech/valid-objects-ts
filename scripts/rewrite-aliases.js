const fs = require('node:fs')
const path = require('node:path')
const ts = require('typescript')

const root = path.resolve(__dirname, '../dist')

function rewrite(file) {
  const text = fs.readFileSync(file, 'utf8')
  const source = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true)
  const edits = []
  function visit(node) {
    if (ts.isStringLiteral(node) && node.text.startsWith('@/')) {
      const parent = node.parent
      const declaration = (ts.isImportDeclaration(parent) || ts.isExportDeclaration(parent)) && parent.moduleSpecifier === node
      const call = ts.isCallExpression(parent) && parent.arguments[0] === node &&
        (parent.expression.kind === ts.SyntaxKind.ImportKeyword ||
          (ts.isIdentifier(parent.expression) && parent.expression.text === 'require'))
      if (declaration || call) {
        const prefix = path.relative(path.dirname(file), root).split(path.sep).join('/')
        const relative = './' + (prefix ? prefix + '/' : '') + node.text.slice(2)
        edits.push({ start: node.getStart(source) + 1, end: node.getEnd() - 1, text: relative })
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  let result = text
  for (const edit of edits.reverse()) result = result.slice(0, edit.start) + edit.text + result.slice(edit.end)
  if (result !== text) fs.writeFileSync(file, result)
}

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) walk(file)
    else if (entry.name.endsWith('.js') || entry.name.endsWith('.d.ts')) rewrite(file)
  }
}
walk(root)
