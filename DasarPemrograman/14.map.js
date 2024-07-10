/*
Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object.
Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, 
dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
*/

const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
  ]);
  
  console.log(myMap);
  
  /* output
  Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
  */

  const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
  //  [key.  value]
  ]);
  
  console.log(capital.size);
  console.log(capital.get("London"));
  capital.set("New Delhi", "India");
  console.log(capital.size);
  console.log(capital.get("New Delhi"));
  
  /* output
  3
  England
  4
  India
   */