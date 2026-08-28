// Working with Functions

// Passing function as argument

function greet(name) {
  return `Hello, ${name}!`;
}

function processUserInput(callback) {
  const name = "Alice";
  console.log(callback(name)); // calling the passed function
}

processUserInput(greet);

// Returning function 

function multiplier(factor) {
  return function(x) {
    return x * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15


// Recursive function

function factorial(n){
	if (n === 0){
		return 1;
	}else{
	return n * factorial(n - 1);
	}
}

let n = 5;
let r = factorial(5); // r = 120
console.log(r)