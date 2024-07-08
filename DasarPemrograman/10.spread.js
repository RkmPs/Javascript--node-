const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(favorites);
console.log(...favorites); // spread operator

/*menggabungkan 2 array*/

const others = ["Cake", "Pie", "Donut"];

const allFavorites1 = [favorites, others];
const allFavorites2 = [...favorites, ...others];

console.log(allFavorites1);
console.log(allFavorites2);

/*menggabungkan 2 object */

const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);