class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(other) {
        return new Complex(
            this.real + other.real,
            this.imaginary + other.imaginary
        );
    }

    subtract(other) {
        return new Complex(
            this.real - other.real,
            this.imaginary - other.imaginary
        );
    }

    multiply(other) {
        return new Complex(
            this.real * other.real - this.imaginary * other.imaginary,
            this.real * other.imaginary + this.imaginary * other.real
        );
    }

    divide(other) {
        const denominator = other.real ** 2 + other.imaginary ** 2;
        return new Complex(
            (this.real * other.real + this.imaginary * other.imaginary) / denominator,
            (this.imaginary * other.real - this.real * other.imaginary) / denominator
        );
    }

    equals(other) {
        return this.real === other.real && this.imaginary === other.imaginary;
    }

    modulus() {
        return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
    }

    toString() {
        return `${this.real} ${this.imaginary >= 0 ? '+' : '-'} ${Math.abs(this.imaginary)}i`;
    }
}


const a = new Complex(3, 4);
const b = new Complex(1, 2);
console.log('a + b =', a.add(b).toString());
console.log('a - b =', a.subtract(b).toString());
console.log('a * b =', a.multiply(b).toString());
console.log('a / b =', a.divide(b).toString());
console.log('|a| =', a.modulus());
console.log('a == b?', a.equals(b));