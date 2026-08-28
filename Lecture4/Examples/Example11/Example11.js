// Handling Errors

// Raising Errors

function divideByTwo(number) {
    if (number % 2 !== 0) {
        // we raise errors using throw 
        throw new Error("Only even numbers allowed.");
    }
        return number / 2;
}

try {
    console.log(divideByTwo(5)); 
} catch (error) {
    console.log(error.message);
}
