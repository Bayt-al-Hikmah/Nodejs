// Getting User Input

const readline = require('readline');  // we reguire read line

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});  // we creat instance and set it to read from the stdin and display to stdout


// read text
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);

  // read numbers
  rl.question('How old are you? ', (age) => {
    // convert and parse before using it
    console.log(`After 5 years you will be ${parseInt(age) + 5} years old!`);

    rl.close();
  });
});