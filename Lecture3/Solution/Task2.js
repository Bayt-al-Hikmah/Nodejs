function decimalToBinary(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return num % 2 + 10 * decimalToBinary(Math.floor(num / 2)) ;
}

console.log(decimalToBinary(5));   
console.log(decimalToBinary(10)); 
console.log(decimalToBinary(255)); 