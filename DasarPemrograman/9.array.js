/*
    array, manipulasi data array, array legth
*/

let myArray1 = ["Cokelat", 42.5, 22, true, "Programming"] // index array dimulai dari 0
//                  0       1     2    3         4
console.log(myArray1)
console.log(myArray1[2]) // output = 22
console.log(myArray1.length) // cek jumlah array = 5

myArray1.push('javascript') // menambahkan elemen di akhir array
console.log("setelah push: ", myArray1)

myArray1.pop // mengeluarkan data atau elemen terakhir dari array
console.log("Setelah pop", myArray1)

myArray1.shift(); // mengeluarkan data pertama
myArray1.unshift("Apple"); // menambah data pertama
console.log("setelah shift-unshift",myArray1);

delete myArray1 [1]
console.log("mengapus index 1: ", myArray1) // elemen yang dihapus akan kosong


let myArray2 = ["Cokelat", 42.5, 22, true, "Programming"] 
myArray2.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log("setelah splice(hapus) ", myArray2);

myArray2.splice(1,0,"teh") // di index 1, mengapus 0 elemen, menambah elemen "teh"
console.log("setelah splice (nambah)", myArray2)









