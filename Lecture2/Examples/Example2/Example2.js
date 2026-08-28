// Working with arrays

// creating array

let fruits = ['apple', 'banana', 'orange'];

// Accessing array elements

console.log(fruits[1]); // result: banana

// Array methods

console.log(fruits.length);  // result: 3 | get the length of array

console.log([1, 2, 3].includes(2));               // result: true | check if the array include specific element
console.log(['a', 'b', 'a'].indexOf('a'));        // result: 0    | resutn index of element if exist or return -1
console.log(['a', 'b', 'a'].lastIndexOf('a'));    // result: 2    | return index of element if exist but start searching from the end
console.log([1, 3, 6, 8].find(n => n / 3 === 2)); // result: 6    | return first element that match the condition

let arr = ['apple', 'banana'];

arr.push('orange');                // result: ['apple', 'banana', 'orange'] | add element to the end of array
arr.unshift('annanas');            // result: ['annanas', 'apple', 'banana', 'orange'] | add element to the start of the array

const last = fruits.pop();         // result: ['annanas', 'apple', 'banana'] | remove and return element from the end
console.log(last)                  // result: 'orange'

const first = fruits.shift();      // result: ['apple', 'banana'] | remove and return element from the start
console.log(first)                 // result: 'annanas'

let colors = ['red', 'green', 'blue'];
colors.splice(1, 0, 'yellow');     // result: ['red', 'yellow', 'green', 'blue'] | add element to specified index wihout removing any element

colors.splice(2, 1);               // result: ['red', 'yellow', 'blue'] | remove element at index 2
 
colors.splice(1, 1, 'purple');     // result: ['red', 'purple', 'blue'] | replace element at specified index

// splice work by replacing  
// first argument is where we want to add or replace element 
// second argument is how many element we want replace
// third argument is element we want to add or replace with if it empty we only delete

let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);    // result: [1, 2, 3, 4] | combine two arrays together
let merged = [...arr1, ...arr2];     // result: [1, 2, 3, 4] | work same as concate but more powerfull and flexible


let original = [1, 2, 3, 5];
console.log(original.slice(1));      // result: [2, 3, 5] | make sub array starting from index 1
console.log(original.slice(1, 3));   // result: [2, 3]    | make sub array starting from index 1 stopping at 3 excluded  


console.log([40, 1, 5, 200].sort());                // result: [1, 5, 40, 200] | sort from small to big
console.log([40, 1, 5, 200].sort((a, b) => b - a)); // result: [200, 40, 5, 1] | sort from big to small

console.log(['c', 'b', 'a'].reverse());             // result: ['a', 'b', 'c'] | reverse the order of the array