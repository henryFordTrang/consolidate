const fs = require('fs')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

function getLessVariables (file) {
  const themeContent = fs.readFileSync(file, 'utf-8')
  const variables = {}
  themeContent.split('\n').forEach(function (item) {
    if (item.indexOf('//') > -1 || item.indexOf('/*') > -1) {
      return
    }
    const _pair = item.split(':')
    console.log(_pair, '-----')
    if (_pair.length < 2) return
    const key = _pair[0].replace('\r', '').replace('@', '')
    if (!key) return
    variables[key] = _pair[1]
      .replace(';', '')
      .replace('\r', '')
      .replace(/^\s+|\s+$/g, '')
  })
  console.log(variables)
  return variables
}

const globalLessValPath = resolve('./globalLessVal.less')

module.exports = getLessVariables(globalLessValPath)
