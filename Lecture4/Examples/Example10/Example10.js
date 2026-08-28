// Handling Errors

// Catching runtime errors

const a = 4;
try {
    a = 5;
} catch (error) {
    console.log(error); // This will log the error object
} finally {
    console.log("done!");
}