function Square (x) {

    this.square = x * x
}

const result1 = new Square(1)
const result2 = new Square(2)


function Power (number, factor) {
    let sum = 1

    for(let i = 0; i < factor; i++) {
        sum = sum * number
    }
    this.powered = sum
}

const result3 = new Power(2, 1)
const result4 = new Power(2, 2)
const result5 = new Power(2, 4)

