//
// ---------------------------
// Day 4 - Advent of Code 2022
// ---------------------------
//
const { parseInput } = require('../utils')
const Pair = require('./Pair.js')

//
// Parse datas
//
const lines = parseInput("./input.txt")
let pairs = []

//
// Iterate lines to create pairs
//
pairs = lines.map(l => new Pair(l))

//
// Solution Part 1 : count sum of full overlaping ranges
//
var total = pairs.reduce((sum, p) => sum + (p.hasFullOverlap() ? 1 : 0) , 0)
console.log(`Answer 1/2 : ${total}`)

//
// Solution Part 2 : count sum of ranges that overlap 
//
total = pairs.reduce((sum, p) => sum + (p.overlap() > 0 ? 1 : 0) , 0)
console.log(`Answer 2/2 : ${total}`)