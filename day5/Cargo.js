class Cargo {
    constructor(datas){
        this.datas = datas
        this.columns = []
        this.instructions = []
        this.parseDatas()
    }

    executeOneInstruction(){
        let instruction = this.instructions.shift()
        for (let i = 0; i < instruction.moves; i++){
            let val = this.columns[instruction.from].splice(-1)[0]
            this.columns[instruction.to].push(val)
        }
    }

    executeOneInstructionBlock(){
        let instruction = this.instructions.shift()
        let vals = this.columns[instruction.from].splice(-instruction.moves)
        this.columns[instruction.to] = this.columns[instruction.to].concat(vals)
    }

    topCode(){
        return this.columns.reduce((sum, c) => sum + c.pop(), '')
    }

    parseDatas(){
        //
        // Count columns
        // 
        let countColumns = (this.datas[0].length + 1) / 4

        //
        // Count rows
        //
        let countRows = this.datas.findIndex(r => r == '') - 1
        
        //
        // Fill columns
        //
        for (let x = 0; x < countColumns; x++){
            this.columns.push([])
            for (let y = 0; y < countRows; y++){
                let c = this.datas[countRows - 1 - y].charAt(x * 4 + 1)
                if (c != ' '){
                    this.columns[x].push(c)
                }
            }
        }

        //
        // Parse instructions
        //
        this.datas.splice(0, countRows + 2)
        while (this.datas.length > 0){
            let rowIns = this.datas.shift()
            let parts = rowIns.split("from")
            let moves = parseInt(parts[0].split("move")[1])
            let partColumns = parts[1].split("to").map(p => parseInt(p))
            this.instructions.push ({
                moves: moves,
                from: partColumns[0] - 1,
                to: partColumns[1] - 1
            })
        }
    }
}

module.exports = Cargo