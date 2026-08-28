// Object Oriented Programming

// Creating class
class Animal {
  // constructor  
  constructor(name) {
    this.name = name;
  }
  // class method
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// creating instance from the class
const dog = new Animal("Buddy");
dog.speak();