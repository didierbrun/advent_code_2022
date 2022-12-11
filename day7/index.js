//
// ---------------------------
// Day 7 - Advent of Code 2022
// ---------------------------
//
const { parseInput } = require('../utils')
const Directory = require('./Directory.js')
const sizeDisk = 70000000
const neededSpace = 30000000

//
// Parse datas
//
const lines = parseInput("./input.txt")


let root = new Directory()

Directory.current = root
Directory.root = root
Directory.lines = lines


//
// Solution Part 1 : find folders with size < 100000
//
root.parse()
root.parseWithMinMaxSize(0, 100000)
var result = Directory.result.reduce((sum, d) => sum + d, 0)
console.log(`Answer 1/2 : ${result}`)

//
// Solution Part 2
//

// Compute root size
let rootSize = root.parseWithMinMaxSize(0, Number.POSITIVE_INFINITY)

// Compute minimal size to be deleted
let toBeDeleted = neededSpace - (sizeDisk - rootSize)

// Clear the parsing result
Directory.result = []

// Find all folder of toBeDeleted minimum size 
result = root.parseWithMinMaxSize(toBeDeleted, Number.POSITIVE_INFINITY)

// Sort all the folder by ascending size
let sizes = Directory.result.sort((a, b) => a - b)

// The solution is the first folder size
console.log(`Answer 2/2 : ${sizes[0]}`)