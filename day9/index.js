//
// ---------------------------
// Day 9 - Advent of Code 2022
// ---------------------------
//
const { parseInput } = require('../utils')
const Rope = require('./Rope.js')

//
// Parse datas
//
const lines = parseInput("./input.txt")

//
// Solution Part 1 : Execute moves & count visited nodes
//
const shortRope = new Rope(lines.slice(), 2)
shortRope.executeMoves()
console.log(`Answer 1/2 : ${shortRope.visitedNodes()}`)

//
// Solution Part 2 : Execute moves & count visited nodes
//
const longRopes = new Rope(lines.slice(), 10)
longRopes.executeMoves()
console.log(`Answer 2/2 : ${longRopes.visitedNodes()}`)




