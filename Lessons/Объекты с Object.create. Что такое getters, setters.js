const person = Object.create(
    {
        calculateAge() {
            console.log('Age', new Date().getFullYear() - this.birthYear);
        }
    }, 
    {
    name: {
        value: 'Dima',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 1995,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set (value) {
            document.body.style.background = 'red'
            console.log('Set age', value);
        }
    }
})

// console.log(person)

// const person = {
//     name: 'Dima',
//     birthYear: 1995
// }

// person.name = 'Maxim'

for (let key in person) {
    if (person.hasOwnProperty(key)) {
    console.log('Key', key, person[key]);
    }
}

