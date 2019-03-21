// ArrayPusher

function ArrayPusher() {
    this.array = []

}

ArrayPusher.prototype.push = function (newValue) {
    this.array = this.array.concat(newValue)

}

const pusher1 = new ArrayPusher()
pusher1.push(1)
pusher1.push(4)
pusher1.push(5)
// { array: [1, 4, 5] }

const pusher2 = new ArrayPusher()
pusher2.push(10)
pusher2.push(14)
pusher2.push(6)
// { array: [10, 14, 6] }
