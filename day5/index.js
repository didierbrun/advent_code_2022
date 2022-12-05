//
// ---------------------------
// Day 5 - Advent of Code 2022
// ---------------------------
//
const { parseInput } = require('../utils')
const Cargo = require('./Cargo.js')

//
// Parse datas
//
const lines = parseInput("./input.txt")

//
// Solution Part 1 : instruction moves one by one
//
var cargo = new Cargo(lines.slice())
while (cargo.instructions.length > 0)cargo.executeOneInstruction()
console.log(`Answer 1/2 : ${cargo.topCode()}`)

//
// Solution Part 1 : intruction moves in one row
//
cargo = new Cargo(lines)
while (cargo.instructions.length > 0)cargo.executeOneInstructionBlock()
console.log(`Answer 2/2 : ${cargo.topCode()}`)