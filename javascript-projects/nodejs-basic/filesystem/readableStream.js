/**
 * This script demonstrates how to read a file using a readable stream.
 * 
 * @module readableStream
 */

// Import the necessary module
const fs = require('fs');

// Create a readable stream from the specified file
// The second argument is an options object that sets the highWaterMark (maximum number of bytes to store in the internal buffer before pausing the reading process) to 10.
const readableStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
});

// Add an event listener for the 'readable' event.
// This event is triggered when there is data available to read.
readableStream.on('readable', () => {
    try {
        // Use the read() method to read data from the stream.
        // The read() method returns null if there is no data available to read.
        // The read() method can also throw an error if the chunk cannot be read.
        // In this case, the error is caught and ignored.
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // Do nothing.
    }
});

// Add an event listener for the 'end' event.
// This event is triggered when there is no more data to read.
readableStream.on('end', () => {
    console.log('Done');
});
