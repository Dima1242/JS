// Только браузерный API

const myNumber = 42

// localStorage.removeItem('number')
// console.log(localStorage.getItem('number')); 
// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number')); 
// localStorage.clear()

const object = {
    name: 'Max',
    age: 20
}
 
// localStorage.setItem('person', object)
// localStorage.setItem('person', JSON.stringify(object))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
raw.name = 'Vladilen'

// console.log(type of raw);

// console.log(JSON.parse(raw));

// console.log(person);

//// ==============

window.addEventListener('storage', event => {
    console.log(event);
})

// window.onstorage = () => {}