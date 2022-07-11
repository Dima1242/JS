class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} work ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} receive pay ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'create programm'
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'execute tests'
    }
}

const dev = new Developer('Dima', 100000)
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester('Viktoria', 90000)
console.log(tester.getPaid());
console.log(tester.work());






