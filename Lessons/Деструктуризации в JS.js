function calcValues(a, b) {
    return [
        a + b,
        undefined,
        a * b,
        a / b
    ]
}

// console.log(calcValues(42, 10));


// const sum = result[0]
// const sub = result[1]

// const result = (calcValues(42, 10))
// const [sum, sub] = result 

const [sum, sub = 'Вычитания нет', mult, ...other] = (calcValues(42, 10))

// console.log(sum, mult, other, sub);
 
// Objects

const person = {
    name: 'Max',
    age: 20,
    adress: {
        country: 'Russia',
        city: 'Moscow'
    }
}

// const name = person.names
// const {
//     name: firstName = 'Без имени', 
//     age, 
//     car = 'Машины нет',
//     adress: {city: homeTown, country}
// } = person


const {name, ...info} = person

console.log(firstName, age, car, homeTown, country);

function logPerson ({name: firstName = '111', age}) {
    console.log(firstName + ' ' + age);
}

logPerson (person)