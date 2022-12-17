//
// ----------------------------
// Day 10 - Advent of Code 2022
// ----------------------------
//
const { parseInput } = require('../utils')
const Clock = require('./Clock.js')

//
// Parse datas
//
const lines = parseInput("./example.txt")
const clock = new Clock(lines.slice())
clock.execute()

//
// Solution Part 1 
//
console.log(`Answer 1/2 : ${clock.total}`)

//
// Solution Part 2 
//
console.log(`Answer 2/2 :`)
clock.displayCrt()