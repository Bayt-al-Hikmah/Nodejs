// Working with Files

// Writing to file

// import fs file handler
const fs = require('fs');

const text = "Hello my name is Ali \nnice to meet you All\n";

fs.writeFileSync("output.txt", text);  // Write to the file

fs.appendFileSync("output.txt","More data");       // Append data to file