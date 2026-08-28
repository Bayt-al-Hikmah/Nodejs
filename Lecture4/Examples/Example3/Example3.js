// Object Oriented Programming

// Working with Prototypes

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}



const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2022);

// adding function to prototype of constructor add it to all instances
Car.prototype.getInfo = function() {
  return `${this.brand} ${this.model} (${this.year})`;
};

console.log(car1.getInfo()); // Toyota Corolla (2020)
console.log(car2.getInfo()); // Honda Civic (2022)