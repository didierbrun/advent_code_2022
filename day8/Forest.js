class Forest {
    constructor(lines){
        this.rows = lines.map(l => l.split('').map(e => parseInt(e)))
        this.columns = []
        for (let x = 0; x < this.rows[0].length; x++){
            var c = []
            for (let y = 0; y < lines.length; y++){
                c.push(this.rows[y][x])
            }   
            this.columns.push(c)
        }

        this.width = this.rows[0].length
        this.height = this.rows.length
    }

    scenicScoreAt(x, y){
        //
        // Current tree height
        //
        let height = this.rows[y][x]

        //
        // Tree on rows 
        //
        let rowLeft = this.rows[y].slice(0, x).reverse()
        let rowRight = this.rows[y].slice(x + 1)
       
        // 
        // Tree on columns
        //
        let colLeft = this.columns[x].slice(0, y).reverse()
        let colRight = this.columns[x].slice(y + 1)

        let indexRowLeft = rowLeft.findIndex(e => e >= height)
        let indexColLeft = colLeft.findIndex(e => e >= height)
        let indexRowRight = rowRight.findIndex(e => e >= height)
        let indexColRight = colRight.findIndex(e => e >= height)

        let scoreRowLeft = indexRowLeft == -1 ? rowLeft.length : indexRowLeft + 1
        let scoreColLeft = indexColLeft == -1 ? colLeft.length : indexColLeft + 1
        let scoreRowRight = indexRowRight == -1 ? rowRight.length : indexRowRight + 1
        let scoreColRight = indexColRight == -1 ? colRight.length : indexColRight + 1

        return scoreRowLeft * scoreColLeft * scoreRowRight * scoreColRight
    }

    visibilityAt(x, y){
        //
        // Current tree height
        //
        let height = this.rows[y][x]

        //
        // Tree on rows 
        //
        let rowLeft = this.rows[y].slice(0, x)
        let rowRight = this.rows[y].slice(x + 1)
       
        // 
        // Tree on columns
        //
        let colLeft = this.columns[x].slice(0, y)
        let colRight = this.columns[x].slice(y + 1)

        //
        // Count visibility
        //
        let visibility = 0
        if (rowLeft.find(e => e >= height) == undefined)visibility++;
        if (rowRight.find(e => e >= height) == undefined)visibility++;
        if (colLeft.find(e => e >= height) == undefined)visibility++;
        if (colRight.find(e => e >= height) == undefined)visibility++;

        return visibility
    }
}

module.exports = Forest