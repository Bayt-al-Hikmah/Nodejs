// Working with Functions

// Creating function

// Function Declaration
function say_hello() {
    console.log("Hello, user!");
}

say_hello(); // Call the function

// Function Expression
let welcome = function () {
    console.log("Hello, user!");
}

welcome(); // Call the function


// function with parameters and return value
function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

let result = addTwoNumbers(2, 3);

// Named argument
function createUser(name, age, city) {
    console.log(`Creating user ${name} of age ${age} from ${city}.`);
}

createUser(city = "Algiers", name ="Amina", age = 30);

// Optional Parameters
function greet(name = "user") {
    console.log(`Hello, ${name}!`);
}

greet();          // result: Hello, user!
greet("Mohamed"); // result: Hello, Mohamed!

// Function with arbitrary number of arguments

// using argument object
function greet_names() {
    for (let name of arguments) { 
        console.log(`Hello, ${name}!`);
    }
}

greet_names("Mohamed", "Ahmed", "Ali");

// using the rest parameter
function greet_names2(greeting, ...names) {
  console.log(`${greeting}, ${names.join(' and ')}!`);
}
greet_names2('Hello', 'Alice', 'Bob'); // "Hello, Alice and Bob!"


// Variable Scope

let global_message = "This is global.";

function my_function(num1, num2) {
    // access the global variable
    console.log(global_message);

    // result is a local variable
    let result = num1 + num2;
    return result;
}

let sum = my_function(2, 3);
console.log(sum);
console.log(result); // Error: Undefined variable result
