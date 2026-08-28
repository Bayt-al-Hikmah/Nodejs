// Asynchronous  Programming

// Working async function

// Creating function that return promise
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Ali",
                age: 25
            });
        }, 2000);
    });
}

// Creating async function 
async function getUser() {
    console.log("Getting user...");
    // wait for promise to resolve without blocking rest of the code
    const user = await fetchUser();
    console.log("User received:", user.name);
}
getUser();
console.log("The program continues running...");