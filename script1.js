function Counter () {
    this.number = 0

    this.render()
}

Counter.prototype.inc = function () {
    this.number = this.number + 1

    console.log(this)

    this.render()
}

Counter.prototype.render = function () {
    document.body.innerHTML = ''

    const h1 = document.createElement('h1')
    const button = document.createElement('button')

    h1.innerText = this.number
    button.innerText  = '+'

    button.addEventListener(
        'click',
        this.inc.bind(this)
    )

    document.body.appendChild(h1)
    document.body.appendChild(button)


    
}