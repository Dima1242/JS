// const person = {
//     name: 'Maxim',
//     age: 25,
//     greet: function() {
//         console.log('Greet!');
//     }
// }

 const person = new Object({
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log('Greet!');
    }
})

Object.prototype.sayHello = function() { // новый метод у родительского прототипа
    console.log('Hello!');
}

const lena = Object.create(person) //  Наследование от person
lena.name = "Elena"

// const str = 'i am string'
const str = new String('i am string') 

