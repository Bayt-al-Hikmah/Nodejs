// Working with modules

// requiring built in module
const os = require('os');

// Use its simple methods to get system info
console.log("Operating System Platform:", os.platform());

// requiring functions
const { platform } = require('os');

console.log("Operating System Platform:", platform());