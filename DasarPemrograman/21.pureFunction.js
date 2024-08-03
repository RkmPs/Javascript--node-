/* 
    Pure function adalah Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan
     fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya.
      Sehingga mau seperti apa keadaanya, fungsi yang dibuat selalu menghasilkan sesuatu yang sama,
       terkecuali bila fungsi tersebut diberikan nilai parameter yang berbeda.
*/

//contoh impure funtion
let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80

// contoh pure funtion

const hitungLuasLingkaran2 = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
  }
  
  console.log(hitungLuasLingkaran2(4)); // 50.24
  console.log(hitungLuasLingkaran2(4)); // 50.24
  console.log(hitungLuasLingkaran2(8)); // 200.96
console.log(hitungLuasLingkaran2(8)); // 200.96
  
//contoh impure funtion

const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person,
    newPerson
  });
  
  /**
   * Output:
   *  {
        person: { name: 'Bobo', age: 18 },
        newPerson: { name: 'Bobo', age: 18 }
      }
  */

      const createPersonWithAge2 = (age, person) => {
        return { ...person, age };
      };
      
      const person2 = {
        name: 'Bobo'
      };
      
      const newPerson2 = createPersonWithAge2(18, person);
      
      console.log({
        person,
        newPerson
      });
      
      /**
       * Output:
       *  { 
       *    person: { name: 'Bobo' },
       *    newPerson: { name: 'Bobo', age: 18 } 
       *  }
      */
      
      
