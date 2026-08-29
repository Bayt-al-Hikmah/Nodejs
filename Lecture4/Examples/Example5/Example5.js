// Object Oriented Programming

// Inheritance

// creating parent class
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    // override speak keep parrent behaviour
    speak() {
        super.speak(); // call parent "Animal" speak
        console.log(`${this.name} barks`);
    }
}
class Cat extends Animal {
    // override speak
    speak() {
        console.log(`${this.name} mewo`);
    }
}

const myDog = new Dog("Rex");
myDog.speak(); 
const myCat = new Cat("Alen");
myCar.speak(); 
