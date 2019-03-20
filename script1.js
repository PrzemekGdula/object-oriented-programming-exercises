function move () {
    this.fuelTank = this.fuelTank - 10

    if(this.fuelTank < 0) this.fuelTank = 0
}

const car1 = {
    fuelTank: 100,
    move: move,
}

const car2 = {
    fuelTank:100,
    move: move
}

car1.move()
car1.move()

car2.move()

console.log(car1)

console.log(car2)


//above line should display
//{fuel tank; 80 } 