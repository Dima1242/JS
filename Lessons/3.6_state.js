class Light {
    constructor(light) {
        this.light = light
    }
}

class RedLight extends Light {
    constructor() {
        super('red')
    }
    
    sign() {
        return 'Stop'
    }
}

class YeelowLight extends Light {
    constructor() {
        super('red')
    }
    
    sign() {
        return 'Ready'
    }
}

class GreenLight extends Light {
    constructor() {
        super('red')
    }
    
    sign() {
        return 'Go'
    }
}

class TrafficLights {
    constructor() {
        this.states = [
            new GreenLight(),
            new YeelowLight(),
            new RedLight()
        ]
        this.current = this.states[0]
    }

    change() {
        const total = this.states.length
        let index = this.states.findIndex(light => light === this.current)

        if (index + 1 < total) {
            this.current = this.states[index + 1]
        } else {
            this.current = this.states[0]
        }
    }

    sign() {
        return this.current.sign()
    }
}


const traffic = new TrafficLights
console.log(traffic.sign());
traffic.change()
console.log(traffic.sign());
traffic.change()
console.log(traffic.sign());
traffic.change()
console.log(traffic.sign());
traffic.change()
console.log(traffic.sign());