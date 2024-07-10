const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }
   
  const { firstName, lastName, age } = profile;
   
console.log(firstName, lastName, age);
  
//melakukannya pada variabel yang sudah dideklarasikan.

let firstName1 = "Dimas";
let age1 = 20;
 
// menginisialisasi nilai baru melalui destructuring object
({ firstName1, age1 } = profile);
 
console.log(firstName);
console.log(age);

// Mengganti nama variable lokal

const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);