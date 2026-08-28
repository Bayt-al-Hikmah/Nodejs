// Object Oriented Programming

// Polymorphism

// Creating parent class
class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

// Creating child class extand shape
class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

const s1 = new Shape();
const s2 = new Circle();

let shapes = [s1 ,s2];

// loop through shape and call draw method
for (let shape of shapes){
    shape.draw()
}
