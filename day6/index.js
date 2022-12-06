//
// ---------------------------
// Day 6 - Advent of Code 2022
// ---------------------------
//
const { parseInput } = require('../utils')
const Device = require('./Device.js')

//
// Parse datas
//
const lines = parseInput("./input.txt")
const device = new Device(lines)

//
// Solution Part 1 : find signal position for a length of 4
//
console.log(`Answer 1/2 : ${device.findSignal(4)}`)

//
// Solution Part 2 : find signal position for a length of 14
//
console.log(`Answer 2/2 : ${device.findSignal(14)}`)