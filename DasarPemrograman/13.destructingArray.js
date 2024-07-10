/*
    Destructing array, Destructing assigment(Memasukan ke variavle yg sudah ada),
    contoh kegunaan: swap nilai variable
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

//memilih index tertentu untuk di destructing

const [ , , thirdFood2 ] = favorites;
console.log(thirdFood2);

//meinisialisasi ulang variable lokal
 
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites;
 
console.log(myFood);
console.log(herFood);

// contoh kegunaan destructing array, menukar nilai variable

let a = 1;
let b = 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);