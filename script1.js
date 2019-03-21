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
    const button = document.createElement('button')
    const p = document.createElement('p')

    input.setAttribute('type', 'number')
    input.value = this.inputValue // gdyby tego nie bylo to nie dodawalby wartosci do stanu tylko czyscil//
    button.innerText = 'Dodaj liczbe!'
    p.innerText = `Suma liczb to - ${this.sum()}, a srednia to - ${this.average()}` //`` template stringi sluza do tegoaby dodawac wyrazenia(np funkcje),  bez uzycia +, trzeba stosowac wtedy {}, () funkcje musza byc z wywolaniem

    input.addEventListener(
        'change',
        event => this.inputValue = Number(event.target.value)
    )

    button.addEventListener(
        'click',
        () => this.push(this.inputValue)
    )

    this.container.appendChild(input)
    this.container.appendChild(button)
    this.container.appendChild(p)
}

ArrayPusher.prototype.push = function (newValue) {
    this.array = this.array.concat(newValue)

    this.render() //za kazda zmiana rerenderuje//
}

ArrayPusher.prototype.sum = function () {
    let sum = 0

    for (let i = 0; i < this.array.length; i++) {
        sum = sum + this.array[i]
    }

    return sum
}

ArrayPusher.prototype.average = function () {
    if (this.array.length === 0) return 0

    return this.sum() / this.array.length
}


