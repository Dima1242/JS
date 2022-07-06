// 1 Переменные
// variable
// const firstName = 'Dmitrii' //string //camelCase
// //const age = 27 //number
// const isProgrammer = true //boolean

// const $ = 'private'
// //const if = 'mkef' //err
// const withNum5 = '5'
// // const 5withNum = 5 //err

// 2 Мутирование
//console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
//alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

//const lastName = prompt ('Введите фамилию')
// alert(firstName + ' ' + lastName)

// // 3 Операторы
// let currentYear = 2020
// const birthYear = 1995
// //const age = currentYear + birthYear
// const a = 10
// const b = 5
// let c = 32
// //c = c + a
// c += a
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Dima'
// const age = 26
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// // 5 Приоритет операторов
// const fullAge = 27
// const birthYear = 1995
// const currentYear = 2022
// // > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

//6 Условные операторы
// const courseStatus ='fail' //ready, fail, pending

// if (courseStatus==='ready') {
//     console.log("Курс уде готов и его можно прохдить")
// } else if (courseStatus==='pending') {
//     console.log("Курс находится в процессе разработки")
// } else {
//     console.log("Курс не получился")
// }

// const num1 = 42
// const num2 = '42'
// console.log(num1===num2)

// const isReady = false

// // if (isReady) {
// //     console.log("Все готово")
// // }else {
// //     console.log("Все не готово")
// // }

// isReady ? console.log("Все готово") : console.log("Все не готово")

//7 Булева логика

//8 Функции

// function calculateAge(year) {
//     return 2022-year
// }


// // console.log(calculateAge (1995))
// // console.log(calculateAge (2019))
// // console.log(calculateAge (1999))

// function logInfoAbout (name, year) {
//     const age = calculateAge(year)

//     if (age>0) {
//         console.log("Человек по имени " + name + " сейчас имеет возвраст " + age)
//     } else {
//         console.log("будущее")
//     }

    
// }

// logInfoAbout ("Дима", 1995)
// logInfoAbout ("Барти", 2025)

// 9 Массивы

// const cars = ['Мазда', 'Мерседес', "Форд"]
// // const cars = new Array('Мазда', 'Мерседес', "Форд")
// console.log(cars)

// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[3])

// cars[0]='Porshe'
// cars[cars.length]='Mazda'
// console.log(cars)

// // // 10. Циклы
// // const cars = ['Мазда', 'Мерседес', "Форд", "Porshe"]

// // // for (let i=0; i<cars.length; i++) {
// // //     const car = cars[i]
// // //     console.log(car)
// // // }

// // for (let car of cars) {
// //     console.log(car)
// //}

// // 11 Объекты
// const person = {
//     firstName: 'Dima',
//     lastName: 'Bartenev',
//     year: 1995,
//     languages: ['Ru','En'],
//     hasWife: true,
//     greet: function() {
//         console.log('greet from person')
//     }
// }

// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'languages'
// console.log(person[key])
// person.hasWife = true
// person.isProgrammer = true
// console.log(person)
// person.greet()

