const makeCar = function (fuelTank) {
    return {
        fuelTank: fuelTank,
        move: function (combustion) {
            this.fuelTank = this.fuelTank - combustion
        },
    }
}
const cars = []

for (let i = 0; i < 100; i++) {
   const car = makeCar(100-i)

   cars.push(car)
    
}
console.log(cars);