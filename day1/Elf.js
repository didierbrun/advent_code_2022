//
// Elf Class
//
class Elf {
    constructor(foodItems){
        this.foodItems = foodItems.map(a => parseInt(a))
        this.calories = this.foodItems.reduce((p, a) => p + a, 0)
    }
}

module.exports = Elf