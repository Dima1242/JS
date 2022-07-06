const cars = ['Mazda', 'Ford', 'BMV', 'Mersedes']
// const people = [
//    {name: 'Dima', budget:1000},
//    {name: 'Dima2', budget:2000}, 
//    {name: 'Dima3', budget:3000} 
// ]
const fib = [1,1,2,3,5,8,13]
// const fib = [1,1,2,3,5,8,13,'21',true,{}]

// // function
// function addItenToEnd () {
// }

// // Method
// cars.push('Reno')
// cars.unshift('Volga')

// console.log(cars.shift()); // 'Volga'
// console.log(cars.pop()); //Reno

// console.log(cars.reverse);
// console.log(cars);

// const index = cars.indexOf('BMV');

// cars[index] = 'Porshe'
// console.log(cars);

// let findedPerson
// for (const person of people) {
//      if (person.budget===3000) {
//          findedPerson = person
//      }
// }
// console.log(findedPerson);

// const index = people.findIndex(function(person){
//     return person.budget ===3000
// });

// const person = people.find(function(person){
//     return person.budget ===3000
// });

// const person = people.find(person => person.budget === 3000)
// console.log(person);
    

//  console.log(people[index]);
//  console.log(person);

// console.log(cars.includes('Mazda'));

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// });

// const pow2 = num => num ** 2
// const sgrt = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)

// Задача 1
// const text = 'Привет, мы изучаем Javascript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText);

const people = [
    {name: 'Dima', budget:1000},
    {name: 'Dima2', budget:2000}, 
    {name: 'Dima3', budget:3000} 
 ]

 const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc,person) => {
        acc += person.budget
        return acc
    },0) 

console.log(allBudget);