function logPerson () {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {nama: 'Mixa', age: 22, job:'Frontend'}
const person2 = {name: 'Elena', age: 19, job:'SMM'}


function bind (context, fn) {
    return function(...arg) {
        fn.apply(context, args)
    }
}

bind(person1, logPerson)()