//
// ---------------------------
// Day 3 - Advent of Code 2022
// ---------------------------
//
const { parseInput } = require('../utils')
const Rucksack = require('./Rucksack.js')

//
// Parse datas
//
const lines = parseInput("./input.txt")
let rucksacks = []

//
// Iterate line to create rucksacks
//
rucksacks = lines.map(l => new Rucksack(l))

//
// Solution Part 1 : sum of scores for all rucksacks
//
var score = rucksacks.reduce((sum, r) => sum + r.scoreForItem(r.sharedItem()), 0)
console.log(`Answer 1/2 : ${score}`)

//
// Solution Part 2 : sum of scores for all groups of 3
//
score = 0
for (let i = 0; i < rucksacks.length; i += 3){
    score += rucksacks[i].scoreForItem(rucksacks[i].sharedItemWithOthers(rucksacks[i + 1], rucksacks[i + 2]))
}
console.log(`Answer 2/2 : ${score}`)


