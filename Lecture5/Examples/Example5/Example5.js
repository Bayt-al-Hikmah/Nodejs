// Working with Files

// Reading file

// import fs file handler
const fs = require('fs');

// Asynchronous Read
fs.readFile("output.txt", "utf8", (err, data) => {   
	if (err) throw err;     
	console.log(data);   
});

// Synchronous Read
const content = fs.readFileSync("output.txt", "utf8");
console.log("File content:\n", content);