class Pair {
    constructor(datas){
        let parts = datas.split(',')
        let first = parts[0].split('-').map(e => parseInt(e))
        let second = parts[1].split('-').map(e => parseInt(e))
        this.ranges = [first, second]
    }

    overlap(){
        let sorted = this.ranges.sort((a, b) => a[0] - b[0])
        let r0 = sorted[0]
        let r1 = sorted[1]
        if (r1[0] > r0[1]){
            return -1
        } else {
            if (r1[1] <= r0[1]){
                return r1[1] - r1[0] + 1
            } else {
                return r0[1] - r1[0] + 1
            }
        }
    }

    hasFullOverlap(){
        let l0 = this.ranges[0][1] - this.ranges[0][0] + 1
        let l1 = this.ranges[1][1] - this.ranges[1][0] + 1
        let overlapLength = this.overlap()
        return overlapLength == l0 || overlapLength == l1
    }
}

module.exports = Pair