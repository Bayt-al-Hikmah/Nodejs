// Object Oriented Programming

// Creating object

const person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

// using object method
person.greet();

// adding new property
person.city = "London";