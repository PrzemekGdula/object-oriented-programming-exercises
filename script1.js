// ArrayPusher

function ArrayPusher(selector) {//funkcja konstruktora, produkuje obiekty ze slowkiem new, zupelnie normalna funkcja, przyjmuje parametr i tworzy nowe obiekty z wywolaniem, nadaje mu prototyp z wlasciwosci prototype funkcji konstruktora,wywoluje funkcje i zwraca nowy obiekt//
    this.container = document.querySelector(selector) || document.body

    this.array = []
    this.inputValue = 0 //pokazujemy stan poczatkowy inputa//

    this.render() //to jest juz wywolanie metody, render opisuje zawartosc html-owa//
}

ArrayPusher.prototype.render = function () {
    this.container.innerText = '' // jak rednderujemy to czyscimy kontener, czasami jest prosciej utworzyc cos na nowo niz zastanawiac sie co sie zmienilo,

    const input = document.createElement('input')
    const button = document.createElement('button')
    const p = document.createElement('p')// tworzenie wszystkich elementow
    const arrayContainer = this.renderNumbersArray()

    input.setAttribute('type', 'number')
    input.value = this.inputValue // gdyby tego nie bylo to nie dodawalby wartosci do stanu tylko czyscil//
    button.innerText = 'Dodaj liczbe!'
    p.innerText = `Suma liczb to - ${this.sum()}, a srednia to - ${this.average()}` //`` template stringi sluza do tegoaby dodawac wyrazenia(np funkcje),  bez uzycia +, trzeba stosowac wtedy {}, () funkcje musza byc z wywolaniem
    //dodawanie atrybutw do tych elementow//
    input.addEventListener(
        'input',
        event => this.inputValue = Number(event.target.value)
    )

    button.addEventListener(
        'click',
        () => this.push(this.inputValue)
    )

    this.container.appendChild(input)
    this.container.appendChild(button)
    this.container.appendChild(arrayContainer)//wyswietla ArrayPusher.prototype.renderNumbersArray//
    this.container.appendChild(p)
}

ArrayPusher.prototype.renderNumbersArray = function () {//tworzy nowego diva do ktrego upycha poszczegolne divy, po to aby mozna to bylo zamknac w jednej funkcji//
    const arrayContainer = document.createElement('div')

    this.array.forEach(//wyswietlanie naszej tablicy//
        (number, index) => {
            const div = document.createElement('div')
            const button = document.createElement('button')

            div.innerText = number
            button.innerText = 'Usun!'

            button.addEventListener(
                'click',
                () => this.remove(index)
            )

            div.appendChild(button)
            arrayContainer.appendChild(div)
        }
    )

    return arrayContainer
}

ArrayPusher.prototype.remove = function (removedElementIndex) {
    this.array = this.array.filter(
        (el, index) => index !== removedElementIndex
    )

    this.render()
}

ArrayPusher.prototype.push = function (newValue) {
    this.array = this.array.concat(newValue)

    this.render() //za kazda zmiana rerenderuje//
}

ArrayPusher.prototype.average = function () {
    if (this.array.length === 0) return 0

    return this.sum() / this.array.length
}

ArrayPusher.prototype.sum = function () {
    let sum = 0

    for (let i = 0; i < this.array.length; i++) {
        sum = sum + this.array[i]
    }

    return sum
}
