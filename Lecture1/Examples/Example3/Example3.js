// Working with Numbers

let a = 10;           
let b = 4;            

// arithmetic operations
console.log( a + b);    // result: 14     
console.log( a - b);    // result: 6 
console.log( a * b);    // result: 40       
console.log( a / b);    // result: 2.5     
console.log( a % b);    // result: 2 
console.log( a ** b);   // result: 10000.0 Float


// compound assignment operators

a = 10; 
a += 5;        // result: 15 | same as  a =  a + 5

a = 10; 
a -= 5;        // result: 5 | same as  a =  a + 5

a = 10; 
a /= 5;        // result: 2 | same as  a =  a / 5

a = 10; 
a *= 5;        // result: 50 | same as  a =  a * 5

a = 10; 
a %= 5;        // result: 0 | same as  a =  a % 5

a = 10; 
a **= 5;       // result: 100000 | same as  a =  a *** 5

// increment/decrement operators

let count = 5;
let new_value =  count++;  // assign then update
console.log(`Count: ${count}, New value: ${new_value}`);

let new_value2 = --count;  // update then assign
console.log(`Count: ${count}, New value: ${new_value2}`);
