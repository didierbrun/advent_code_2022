
const movesVector = {
    'R': [1, 0],
    'U': [0, -1],
    'L': [-1, 0],
    'D': [0, 1]
}

class RopeNode {
    constructor(x, y){
        this.x = x
        this.y = y
    }

    moveBy(vector){
        let [x, y] = vector
        this.x += x
        this.y += y
    }

    touch(other){
        let dfx = Math.abs(other.x - this.x)
        let dfy = Math.abs(other.y - this.y)
        return dfx <= 1 && dfy <= 1
    }

    follow(other){
        let dfx = Math.sign(other.x - this.x)
        let dfy = Math.sign(other.y - this.y)
        this.moveBy([dfx, dfy])
    }

    key(){
        return `${this.x},${this.y}`
    }
}

class Rope {
    constructor(datas, length){
        this.parseMoves(datas)
        this.nodes = []
        while(length--)this.nodes.push(new RopeNode(0, 0))
        this.visited = {}
    }

    parseMoves(lines){
        this.moves = []
        this.moves = []
        lines.map(line => {
            let parts = line.split(" ")
            let count = parseInt(parts[1])
            while (count--){
                this.moves.push(movesVector[parts[0]])
            }
        })
    }

    executeMoves(){
        this.visited[this.nodes[0].key()] = true
        while (this.moves.length > 0){
            let move = this.moves.shift()
            let count = this.nodes.length - 1
            this.nodes[count].moveBy(move)
            while (count--){
                if (!this.nodes[count].touch(this.nodes[count + 1])){
                    this.nodes[count].follow(this.nodes[count + 1])
                }
            }
            this.visited[this.nodes[0].key()] = true
        }
    }

    visitedNodes(){
        return Object.keys(this.visited).length
    }
}

module.exports = Rope

