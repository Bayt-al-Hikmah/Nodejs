// Object Oriented Programming

// Static Methods and Properties

class MathHelper {
    static PI = 3.14;
    static add(a, b) {
        return a + b;
    }
}

console.log(MathHelper.add(5, 3)); // 8
console.log(MathHelper.PI);        // 3.14

let math = new MathHelper();
console.log(math.add(5, 3));   // error