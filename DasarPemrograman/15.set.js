/*
     Hal yang membedakan Set dengan struktur data yang lain adalah data pada 
     Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set 
     juga bersifat unik dan tidak ada duplikasi.
*/

const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4);

console.log(numberSet);

/* output
Set(4) { 1, 6, 5, 10 }
*/