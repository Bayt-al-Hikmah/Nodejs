// Working with File

// File metadata

const fs = require('fs');

// check if file exist
console.log(fs.existsSync('output.txt'));  // true if file exists

// get size of file
const stats = fs.statSync('output.txt');
console.log(stats.size);  // file size in bytes

// rename the file
fs.rename('output.txt', 'new.txt', (err) => {
  if (err) throw err;
  console.log('File renamed successfully.');
});

// delete file
fs.unlink('new.txt', (err) => {
  if (err) throw err;
  console.log('File deleted successfully.');
});