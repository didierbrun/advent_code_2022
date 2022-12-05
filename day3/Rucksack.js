
const rules = {
    ma: 'a'.charCodeAt(0),
    mz: 'z'.charCodeAt(0),
    mA: 'A'.charCodeAt(0),
    mZ: 'Z'.charCodeAt(0)
}

const scores = {
    lowerScore: 1,
    higherScore: 27
}


class Rucksack {
    constructor(datas) {
        this.left = datas.substr(0, datas.length / 2)
        this.right = datas.substr(datas.length / 2)
    }

    sharedItem() {
        let leftLetters = this.left.split('')
        let rightLetters = this.right.split('')
        var stop = false
        var result = ''
        leftLetters.some(l => {
            rightLetters.some(r => {
                if (l == r){
                    result = r
                    stop = true
                }
                return stop
            })
            return stop
        })
        return result
    }

    allLetters(){
        return (this.left + this.right).split('')
    }

    sharedItemWithOthers(a, b){
        let letters = this.allLetters()
        let lettersA = a.allLetters() 
        let lettersB = b.allLetters()
        var stop = false
        var result = ''
        letters.some(l => {
            lettersA.some(a => {
                lettersB.some(b => {
                    if (l == a && a == b){
                        result = l
                        stop = true
                    }
                    return stop
                })
                return stop
            })
            return stop
        })
        return result
    }

    scoreForItem(item) {
        let icode = item.charCodeAt(0)
        if (icode >= rules.ma && icode <= rules.mz){
            return scores.lowerScore + icode - rules.ma
        } else {
            return scores.higherScore + icode - rules.mA
        }
    }
}

module.exports = Rucksack