// ArrayPusher

function ArrayPusher() {
    this.array = []
}

ArrayPusher.prototype.push = function (newValue) {
    this.array = this.array.concat(newValue)
}

ArrayPusher.prototype.sum = function () {
    let sum = 0

    for (let i = 0; i < this.array.length; i++) {
        sum = sum + this.array[i]
    }

    return sum
}

ArrayPusher.prototype.average = function () {
   return this.sum() / this.array.length
}

const pusher1 = new ArrayPusher()
pusher1.push(1)
pusher1.push(4)
pusher1.push(5)
// { array: [1, 4, 5] }

pusher1.sum()
pusher1.average() // 10
  // pusher1.average() // 3.(3)
  
  const pusher2 = new ArrayPusher()
pusher2.push(10)
pusher2.push(14)
pusher2.push(6)
// { array: [10, 14, 6] }

pusher2.sum()
pusher2.average() // 30
  // pusher2.average() // 10