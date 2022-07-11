// const people = [
//     {id:1, name: 'Dima', age: 20},
//     {id:2, name: 'Elena', age: 30},
//     {id:3, name: 'Igor', age: 40},
//     {id:4, name: 'Vasilisa', age: 60},
// ]

// console.table(people)

console.time('timer')
const items = []
for (let i = 0; i < 10000; i++) {
    items.push({el: i + 1})
}
console.timeEnd('timer')