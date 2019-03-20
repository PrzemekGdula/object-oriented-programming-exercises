function move (combustion) {
    this.fuelTank = this.fuelTank - combustion

    if(this.fuelTank < 0) this.fuelTank = 0
}

const car1 = {
    fuelTank: 100,
    move: move,
}

const car2 = {
    fuelTank:100,
    move: move.bind(car1),
}

car1.move(10)
car1.move(10)

car2.move(10)
car2.move(10)
car2.move(10)

console.log('car1', car1)

console.log('car2', car2)


//above line should display
//{fuel tank; 80 } 