//
// ----------------------------
// Day 11 - Advent of Code 2022
// ----------------------------
//
const { parseInput } = require('../utils')
const MonkeyGame = require('./MonkeyGame.js')

//
// Parse datas
//
const lines = parseInput("./input.txt")

//
// Solution Part 1 
//
const game1 = new MonkeyGame(lines.slice(), true)
game1.executeRound(20)
let filtered1 = game1.monkeys.sort((a, b) => b.inspectCount - a.inspectCount)
let result1 = filtered1[0].inspectCount * filtered1[1].inspectCount
console.log(`Answer 1/2 : ${result1}`)

//
// Solution Part 2
//
const game2 = new MonkeyGame(lines.slice(), false)
game2.executeRound(10000)
let filtered2 = game2.monkeys.sort((a, b) => b.inspectCount - a.inspectCount)
let result2 = filtered2[0].inspectCount * filtered2[1].inspectCount
console.log(`Answer 2/2 : ${result2}`)