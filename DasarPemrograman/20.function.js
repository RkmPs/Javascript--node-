/*
    declaring, Rest parameter, arrow function, Rekursif
*/

/* Declaring */

function multiply(a, b) {
    return a * b;
  }
  
let result = multiply(10, 2)
console.log(result)
// output 20

/*  Rest Parameter */

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5));

/* arrow function */
  
const sayName = (name) => {
    console.log(`Nama saya ${name}`)
}
  
// arrow function 1 line

const multiply2 = (a, b) => a * b;
console.log(multiply2(3, 4));

// rekursif

const countDown = start => {
    console.log(start);
    if(start > 0) countDown(start-1);
  };
  
  countDown(10);