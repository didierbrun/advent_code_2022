
const rules = {
    'AA': 0,
    'AB': -1,
    'AC': 1,
    'BA': 1,
    'BB': 0,
    'BC': -1,
    'CA': -1,
    'CB': 1,
    'CC': 0 
}

const points = {
    'A': 1,
    'B': 2,
    'C': 3
}

const wins = {
    win: 6,
    draw: 3,
    lose: 0
}

class Round {
    constructor(datas){
        let parts = datas.split(' ')
        this.players = [parts[0], String.fromCharCode(parts[1].charCodeAt(0) - 'X'.charCodeAt() + 'A'.charCodeAt(0))]
    }

    scoreForPlayer(no){
        let roundPoints = [wins.lose, wins.draw, wins.win]
        let result = rules[`${this.players[no]}${this.players[1 - no]}`]
        return points[this.players[no]] + roundPoints[result + 1]
    }

    scoreForPlayerStrategy(no){
        let desiredScore = { A: -1, B: 0, C: 1}
        let playerTurn = this.players[no]
        let opponentTurn = this.players[1 - no]
        let scenario = Object.entries(rules).filter(e => e[0].charAt(0) == opponentTurn && e[1] == -desiredScore[playerTurn])
        let roundPoints = [wins.lose, wins.draw, wins.win]
        return points[scenario[0][0].charAt(1)] + roundPoints[desiredScore[playerTurn] + 1]
    }
}

module.exports = Round