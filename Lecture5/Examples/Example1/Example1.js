// Asynchronous  Programming

// Working with Promise

// Creating function that return promise
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({
                    name: "Ali",
                    age: 25
                });
            } else {
                reject(new Error("Failed to get user"));
            }
        }, 1000);
    });
}

// Handeling promise
getUser()
    .then(user => {console.log(user.name);})
    .catch(error => {console.log(error.message);});

console.log("Welcome"); // this run and dont wait the promise