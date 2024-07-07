/*  operator
    - perbandingan
    - logikal
*/

const a = 10
const b = 12
const c = 10

console.log(a == b) // sama dengan
console.log(a !== c) //bukan sama dengan
console.log(a < b) // kurang dari
console.log(a > b) // lebih dari
console.log(a <= c) // kurang dari atau sama dengan
console.log(a <= b)

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/

//Logical operation

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false