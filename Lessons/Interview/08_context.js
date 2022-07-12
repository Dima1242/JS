const person = {
    surname: 'Stark',
    knows: function(what, name) {
        console.log(`You ${what} know ${name} ${this.surname}`);
    }
}

const john = { surname: 'Snow' }

person.knows('all', 'Bran')
person.knows.call(john, 'nothing', 'John')
person.knows.apply(john, ['nothing', 'John'])
person.knows.call(john, ...['nothing', 'John'])
person.knows.bind(john, 'nothing', 'John')()
const bound = person.knows.bind(john, 'nothing', 'John')
bound()

// ==============

function Person(name, age) {
    this.name = name
    this.age = age

    console.log(this);
}

const elena = new Person('Elena', 20)