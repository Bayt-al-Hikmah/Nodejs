
// Working with Loops

// while loop
let i = 0;

while (i < 3) {
  console.log(`i is ${i}`);
  i++;
}

// do while loop
let j = 0;

do {
  console.log(`j is ${j}`);
  j++;
} while (j < 2);


// for loop

for (let k = 0; k < 5; k++) {
  console.log(`Count: ${k}`);
}

// loop  over array

let fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
  console.log(fruit);
}

// loop over object

let person = {"name": "Alice", "age": 30};

for(k in person) {
    console.log(`${k}: ${person[k]}`);
}

// Skip step with continue 

for (let m = 0; m < 5; m++) {
  if (m == 2) continue;
  console.log(m);  // Skips printing 2
}

// exit loop with break

for (let n = 0; i < 5; n++) {
  if (n == 3) break;
  console.log(n);  // Stops printing at 3
}
