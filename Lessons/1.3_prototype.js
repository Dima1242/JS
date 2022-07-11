const car = {
    whells: 4,

    init() {
        console.log(`I have ${this.whells} wheels, my owner ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Dima'
    }
})

console.log(carWithOwner.__proto__ === car)

carWithOwner.init()