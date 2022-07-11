// function sayHelloTo(name) {
//     const message = 'Hello' + name

//     return function() {
//         console.log(message);
//     }
// }

// const helloToElena = sayHelloTo('Elena')
// console.log(helloToElena);
// helloToElena()

function createFrameworkManager() {
    const fw = ['Angular', 'React']

    return {
        get: function() {
            
        }
    }
}