// null, undefined, boolean, number, string, object, symbol 
// Everything except object is primitive
// console.log(typeof(0));
// console.log(typeof(true));
// console.log(typeof 'Javascript'); // "", '', ``
// console.log(typeof undefined);
// console.log(typeof Math);
// console.log(typeof Symbol('JS'));
// console.log(typeof function() {});
// console.log(typeof NaN); // undefined * 1

// // Fetch type 
// let language = 'Javascript'
// if (language) {
//     console.log('The best language is: ', language);
// }

// // False values   '', 0, undefined, NaN, false

// console.log(Boolean('')); // false
// console.log(Boolean('Hello')); // true
// console.log(Boolean(' ')); // true
// console.log(Boolean('0')); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(Boolean(function(){})); // true

// console.log(1 + '2'); // string 12 
// console.log('' + 1 + 0); // string 10 
// console.log('' - 1 + 0) // -1
// console.log('3' * '8') // 24
// console.log(4 + 10 + 'px') // 14px
// console.log('px' + 5 + 4) // px54
// console.log('42' - 40) // 2
// console.log('42px' - 2) // NaN
// console.log(null + 2) // 2
// console.log(undefined + 2) // NaN

// // == vs ===

// console.log(2 == '2'); // true
// console.log(2 === '2'); // false
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log('0' == false); // true
// console.log('0' == 0); // true
// console.log(0 == 0); // true

// ====
console.log(false == ''); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false
console.log(0 == []); // true
console.log(0 == {}); // false
console.log(0 == null); // false
