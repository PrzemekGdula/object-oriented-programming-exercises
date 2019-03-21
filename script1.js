// ArrayPusher

function ArrayPusher(selector) {
    this.container = document.querySelector(selector) || document.body

    this.array = []
    this.inputValue = 0 //pokazujemy stan poczatkowy inputa//

    this.render()
}

ArrayPusher.prototype.render = function () {
    this.container.innerText = ''

    const input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.value = this.inputValue

    input.addEventListener(
        'change',
        event => this.inputValue = Number(event.target.value)
    )

    this.container.appendChild(input)

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
    if(this.array.length === 0) return 0

   return this.sum() / this.array.length
}


