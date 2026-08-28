// Object Oriented Programming

// Contruction function

// function to build and return object
function Person(name, age) {
  return {
    name: name,
    age: age,
    greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
  }
}

const john = Person("John", 25);
john.greet();

// Using new keyword

function User(name, age) {
  this.name = name;
  this.age = age;
  this.greet=function () {
  console.log(`Hello, I'm ${this.name}`);
};

}

const alex = new User("Alex", 25);
alex.greet();