/*
    objek, add properti, delete object
*/

// let object = {key1: "value1", key2: "value2", key3: "value3"}

const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
  };
  
  console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
  console.log(`Umur saya ${user.age} tahun`);
  console.log(`Saya berasal dari ${user["home world"]}`); // key mempunyai spasi di key nya



  const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };
  
  spaceship.color = "Glossy red";      //karena key/properti sudah ada, jadi mengganti value kay tersebut
  spaceship["maxSpeed"] = 1300;
  spaceship.class = "Light freighter"; // karena key belum ada, jadi menambahkan key/properti tersebut
  delete spaceship.manufacturer;
  
  console.log(spaceship);
  