
const cyclesOfInterest = [20, 60, 100, 140, 180, 220]

class Clock {
    constructor(datas) {
        this.stack = []
        this.x = 1
        this.total = 0
        this.parseInstructions(datas)
        this.crtScreen = []
    }

    parseInstructions(lines) {
        lines.map((line, index) => {
            const [instruction, value] = line.split(" ")
            switch (instruction) {
                case "noop":
                    this.stack.push(0)
                    break;
                case "addx":
                    this.stack.push(0)
                    this.stack.push(parseInt(value))
                    break;
            }
        })
    }

    execute() {
        var lastX = this.x
        var crtLine = ""
        for (let i = 0; i < this.stack.length; i++) {
            this.x += this.stack[i]

            if (cyclesOfInterest.includes(i + 1)){
                this.total = this.total + lastX * (i + 1)
            }

            let crtX = i % 40
            if (crtX >= lastX - 1 && crtX <= lastX + 1){
                crtLine += "#"
            } else {
                crtLine += "."
            }

            if (crtLine.length == 40){
                this.crtScreen.push(crtLine)
                crtLine = ""
            }

            lastX = this.x
       }
    }

    displayCrt(){
        console.log(this.crtScreen.join("\n"))
    }
}

module.exports = Clock