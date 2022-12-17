class Monkey {
    constructor(datas, dividor) {
        this.parseDatas(datas)
        this.inspectCount = 0
        this.dividor = dividor
    }

    parseDatas(lines) {
        // Items
        this.items = lines[1].split(": ")[1].split(",").map(e => parseInt(e.trim()))

        // Operation
        this.operation = lines[2].split("= ")[1].split(' ')

        // Test
        this.test = parseInt(lines[3].split("by ")[1])

        // Throws
        this.throwTrue = parseInt(lines[4].split("monkey ")[1])
        this.throwFalse = parseInt(lines[5].split("monkey ")[1])
    }

    execute(modulo) {
        // Get item
        let item = this.items.shift()

        // Operation
        item = this.executeOperation(item)

        // Bored operation
        if (this.dividor){
            item = parseInt(item / 3)
        } else {
            item = item % modulo
        }

        // Test
        return this.executeInspection(item) ? [this.throwTrue, item] : [this.throwFalse, item]
    }

    executeOperation(item) {
        let otherVal = this.operation[2] == 'old' ? item : parseInt(this.operation[2])
        return this.operation[1] == "*" ? otherVal * item : otherVal + item
    }

    executeInspection(item) {
        this.inspectCount++
        return item % this.test == 0
    }

    receiveItem(item) {
        this.items.push(item)
    }
}

class MonkeyGame {
    constructor(datas, dividor) {
        this.monkeys = []
        this.modulo = 1
        while (datas.length >= 6) {
            let monkey = new Monkey(datas.splice(0, 7), dividor)
            this.monkeys.push(monkey)
            this.modulo = this.modulo * monkey.test
        }
    }

    executeRound(count) {
        while (count--) {
            for (let i = 0; i < this.monkeys.length; i++) {
                while (this.monkeys[i].items.length > 0) {
                    const [throwTarget, item] = this.monkeys[i].execute(this.modulo)
                    this.monkeys[throwTarget].receiveItem(item)
                }
            }
        }
    }
}

module.exports = MonkeyGame