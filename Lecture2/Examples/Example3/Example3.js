// Working with objects

// Creating object

let person = {"name": 'Alex', "age": 30};

// Accessing object

console.log(person["name"]);    // result: 'Alex' | using bracket notation
console.log(person.age);        // result: 30     | using dot notation

// Object methods

console.log(Object.keys(person));   // result: ["name", "age"] | getting the object keys
console.log(Object.values(person)); // result: ["Alex", 30]    | getting the object values

console.log(Object.keys(person).length); // result: 2 | getting length of object by counting keys

console.log(person.hasOwnProperty('age'));  // result: true | check if key exist in object 
console.log("name" in person)               // result: true | check if key exist in object 

console.log(Object.values(person).includes('Alex')); // result: true | check if object have a value by returning the values array and run check on it

const user = {};
user.name = 'Alex';    // adding key value 
user.name = 'Sarah';   // modifies existing property
user["age"] = 20;      // adding key value using bracket notation

delete person["age"]   // remove key value from object

let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged = Object.assign({}, obj1, obj2); // result: { a: 1, b: 2 } | marging two object together
let merged2 = {...obj1, ...obj2};           // result: { a: 1, b: 2 } | more clean syntext to merge object

let player = {"name": 'Alex', "age": 30};
Object.freeze(player);     // lock object and prevent  changes
player.name = 'Max';       // Fails silently
console.log(player.name);  // result: 'Alex'

let player2 = {"name": 'Ali', "age": 20};
Object.seal(player2);        // allow value change but prevent adding new key value pair
player2.id = '49416548';      // Fails silently