const fs = require('fs')

const parseInput = (path) => {
    let datas = fs.readFileSync(path, 'utf8')
    return datas.trimEnd('\n').split("\n")
}

module.exports.parseInput = parseInput