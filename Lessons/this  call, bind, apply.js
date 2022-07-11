function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Dima',
    age: 27,
    sayHello: hello,
    // sayHelloWindow: hello.bind(Winwod),
    // sayHelloWindow: hello.bind(this),
    sayHelloWindow: hello.bind(document),  //Window === this
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`) // Заголовок
        console.log(`Name is ${this.name}`); // this === person в данном случае
        console.age(`Name is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

// person.logInfo.bind(lena) // Ничего не выведет
// person.logInfo.bind(lena) 


// const fnLenaInfoLog = person.logInfo.bind(lena)
// fnLenaInfoLog('Frontend', '8-999-123-12-23')

// const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23')
// fnLenaInfoLog()

// person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23')() // Когда нужно

// person.logInfo.call(lena, 'Frontend', '8-999-123-12-23') // Вызывает сразу

person.logInfo.apply(lena, ['Frontend', '8-999-123-12-23']) // Вызывает сразу

/// =============

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function(i) {
//         return i*n
//     })
// }

// console.log(multBy(array, 15));

Array.prototype.multBy = function(n) {
    return arr.map(function(i) {
               return i*n
            })
}

console.log(array.multBy(20))



