//
// ---------------------------
// Day 1 - Advent of Code 2022
// ---------------------------
//
const { parseInput } = require('../utils')
const Elf = require('./Elf.js')

//
// Parse datas
//
const lines = parseInput("./input.txt")
let elfs = []

//
// Iterate from datas to create Elfs
//
var i = 0
while  (lines.length > 0 && i < lines.length){
    if (lines[i] == ''){
        elfs.push(new Elf(lines.splice(0, i)))
        lines.shift()
        i = 0
    }
    i++
}
elfs.push(new Elf(lines))

//
// Sort elfs by calories
//
elfs = elfs.sort((a, b) => b.calories - a.calories)

//
// Solution Part 1 : calories carried by the first elf
//
console.log(`Answer 1/2 : ${elfs[0].calories}`)

//
// Solution Part 2 : caloris carried by the 3 first elfs 
//
let total = elfs.slice(0, 3).reduce((p, e) => p + e.calories, 0)
console.log(`Answer 2/2 : ${total}`)

