/* Isi 
    - escape string
    - concatenation
    - string interpolation
*/

/* escape string
     backslash berguna untuk mengabaikan simbol
     lain yang menimbulkan ambigu di dalam string
*/
console.log('"I think it\'s awesome!" he answered confidently')

//concatenation
let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);

/* output: HelloHello */

// string interpolation (memasukan variable ke string template)

const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */