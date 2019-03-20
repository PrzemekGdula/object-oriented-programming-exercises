// Constructor function
function Car() {
    this.fuelTank = 100
}

Car.prototype.move = function () {
    this.fuelTank = this.fuelTank - 10
}

const car1 = new Car()
