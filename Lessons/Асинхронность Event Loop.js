// Стек Event Loop 

// 1. Попадание в Call Stack
// 2. Остальное Web Apis
// 3. Web Apis делает свое грязное дело таймер или слушатель
// 4. Попадаем в Callback Queue
// 5. EventLoop закидывает Callback Queue в Call Stack

console.log('Start');

console.log('Start2');

function timeout2sec() {
    console.log('timeout2sec');
}

// setTimeout() вызывается у window браузерного API

window.setTimeout(function() {
    console.log('Inside timeout after 5000 milliseconds');
}, 5000)


setTimeout(timeout2sec, 2000)

console.log('End');

