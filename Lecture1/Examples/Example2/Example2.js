// Creating Variables

// Primitive Types
let age = 23;                              // number: int
let pi = 3.14;                             // number: float
let number1 = 12345678901234567890n        // number: big int
let number2 = BigInt("9007199254740991")   // number: big int
let message = "Hello World";               // string with double quotation mark
let name = 'Alice';                        // string with single quotation mark
let greeting = `Hello, ${name}!`;          // string with ` allow us to inject variables
let is_adult = false;                      // boolean
let number;                                // undefined
let user = null;                           // null mean no value
const username = "Ali";                    // constant

// Non Primitive Types

// Object
const person = {
  name: "Alex",       
  age: 30,            
  isAdmin: true,     
  address: {          
    city: "Berlin",
    country: "Germany"
  }
};

// access value 
console.log(person.name);      // using dot notation
console.log(person["name"]);   // using bracket notation

// Arrays
const mixedArray = [
  "text",          
  42,              
  true,            
  { id: 1 },       
  ["nested"]
];

// access value 
console.log(mixedArray[0])  // we use index starting from 0