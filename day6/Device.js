class Device {
    constructor(datas) {
        this.message = datas[0]
    }

    findSignal(length) {
        for (let i = 0; i < this.message.length - length; i++){
            let part = this.message.substr(i, length)
            let set = new Set(part.split(''))
            if (set.size == length)return i + length
        }
    }
}

module.exports = Device