function createCalcFunction(n) {
    return function() {
        console.log(1000*n);
    }
}

// createCalcFunction(42)

// const calc = createCalcFunction(42)
// calc()

function createIncrementor () {
    return function(num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

// console.log(addOne(10)); 
// console.log(addOne(41)); 

// console.log(addTen(10)); 
// console.log(addTen(41)); 

function urlGenerator() {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

console.log(comUrl('google'));
console.log(comUrl('netflix'));

console.log(ruUrl('yandex'));
console.log(ruUrl('vkontakte'));

console.log(comUrl('vkontakte'));








