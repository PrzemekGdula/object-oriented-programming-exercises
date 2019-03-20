function removeLeg(){
    this.legs = this.legs - 1

    if(this.legs < 0) this.legs = 0
}

function removeLegs(numberOfLegs){
    this.legs = this.legs - numberOfLegs

    if(this.legs < 0) this.legs = 0
}

const chair1 = {
    legs: 4,
    removeLeg: removeLeg,
    removeLegs: removeLegs,
}

chair1.removeLeg()
chair1.removeLeg()

chair1.removeLegs(3)

console.log(chair1)