import { API, sampleErrorData, sampleSuccessData } from './support.mjs';

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */
function processData(data) {
  // Map each item in the data array to a promise from API.fetch
  const promises = data.map(({ delay, simulateError }) => 
    API.fetch(delay, simulateError)
  );

  // Return a Promise that resolves when all of the promises have settled
  return Promise.all(promises);
}

processData(sampleErrorData).then(console.log).catch(console.error); // Expected to throw an error
processData(sampleSuccessData).then(console.log).catch(console.error); // Expected output: ['Data from delay 100', 'Data from delay 50']
