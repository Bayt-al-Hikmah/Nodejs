// Object Oriented Programming

// Working with getter and setter

class User {
    // private property
    #name;
    constructor(name) {
        this.#name = name;
    }
    // setter
    set name(value) {
        if (value.length < 3) {
            console.log('Name is too short.');
        } else {
            this.#name = value;
        }
    }
    // getter
    get name() {
        return this.#name.toUpperCase();
    }
};

user = new User("Ali")
user.name = 'Al';    // Output: Name is too short.
user.name = 'Alice'; // Valid assignment
console.log(user.name);