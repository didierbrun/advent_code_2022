//
// ---------------------------
// Day 8 - Advent of Code 2022
// ---------------------------
//
const { parseInput } = require('../utils')
const Forest = require('./Forest.js')

//
// Parse datas
//
const lines = parseInput("./input.txt")
const forest = new Forest(lines)

//
// Solution Part 1 
//
let count = 0

//
// Count the visibilities on the inner trees
//
for (let x = 1; x < forest.width - 1; x++){
    for( let y = 1; y < forest.height - 1; y++){
        if (forest.visibilityAt(x, y) > 0)count++
    }
}

//
// Add the edges trees
//
count += forest.width * 2
count += forest.height * 2 - 4

console.log(`Answer 1/2 : ${count}`)



//
// Solution Part 2
//
var maxScore = 0
for (let x = 1; x < forest.width - 1; x++){
    for( let y = 1; y < forest.height - 1; y++){
        let treeScore = forest.scenicScoreAt(x, y)
        maxScore = Math.max(maxScore, treeScore)
    }
}
console.log(`Answer 1/2 : ${maxScore}`)