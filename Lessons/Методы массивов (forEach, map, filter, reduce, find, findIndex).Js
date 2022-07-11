const people = [
    {name: 'Vladilen', age: 25, budget: 40000},
    {name: 'Elena', age: 17, budget: 3400},
    {name: 'Igor', age: 49, budget: 50000},
    {name: 'Michael', age: 15, budget: 1800},
    {name: 'Vasilisa', age: 24, budget: 25000},
    {name: 'Viktoria', age: 38, budget: 2300},
]

// for (let i = 0; i < people.length; i++) {
//     console.log(peoplep[i]);
// }

// for (let person of people) {
//     console.log(person);
// }

// ForEach

// people.forEach(function(person, index, pArr) {
//     console.log(person);
//     console.log(index);
//     console.log(pArr);
// })

// people.forEach(function(person) {
//     console.log(person);
//   })

// people.forEach (person => console.log(person))

// Map 
// const newPeople = people.map(person => {
//     return person
// })

// const newPeople = people.map(person => {
//     return 'Hello'
// })

// const newPeople = people.map(person => {
//     return person.name
// })


// const newPeople = people.map(person => `${person.name} (${person.age})`)

// const newPeople = people.map(person => person.age * 3)
// console.log(newPeople);

// Filter

// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }

// const adults = people.filter(person => {
//     if (person.age <=18) {
//         return true
//     }
// })

// const adults = people.filter(person => person.age >= 18)

// console.log(adults);

// Reduce

// let amount = 0
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget
// }

// const amount = people.reduce((total, person) => {
//     return total + person.budget
// }, 0)

// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount);

// Find 

// const igor = people.find(person => person.name === 'Игорь')
// console.log(igor);

//  Find index

// const igor = people.findIndex(person => person.name === 'Игорь')
// console.log(igor);

// ==============

const amount = people
    .filter(person => person.budget > 3000)
    .map(persom => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    })
    .reduce((total, person) => total+ person.budget, 0)

console.log(amount);