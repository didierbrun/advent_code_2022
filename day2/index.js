//
// ---------------------------
// Day 2 - Advent of Code 2022
// ---------------------------
//
const { parseInput } = require('../utils')
const Round = require('./Round.js')

//
// Parse datas
//
const lines = parseInput("./input.txt")
let rounds = []

//
// Iterate lines to create rounds
//
lines.map(l => rounds.push(new Round(l)))

//
// Solution Part 1 : add all round scoring for player 1
//
var score = rounds.reduce((sum, r) => sum + r.scoreForPlayer(1), 0)
console.log(`Answer 1/2 : ${score}`)

//
// Solution Part 2 : add all round scoring for player 1 according strategy
//
score = rounds.reduce((sum, r) => sum + r.scoreForPlayerStrategy(1), 0)
console.log(`Answer 2/2 : ${score}`)