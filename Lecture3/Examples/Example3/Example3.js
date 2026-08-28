// Working with functions

// Working with anonymous function
let operations = {
    "+" : (a, b) => a + b,
    "-" : (a, b) => a - b,
    "*" : (a, b) => a * b,
    "/" : (a, b) => a / b
}; // object store anonymous functions

// Function excute the stored anonymous functions
function calculate(num1, num2, operator) {

    if (operations[operator]) {
        // Call the correct anonymous function from the object
        return operations[operator](num1, num2);
    } else {
        return "Unsupported operator";
    }
}

console.log(calculate(10, 5, "+")); // result: 15

// Passing anounymous function as argument

function apply_operation(func, number) {
    return func(number);
}

console.log("Square: " + apply_operation(n => n * n, 5)); // result: 25