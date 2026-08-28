// Working with strings

// creating strings

let name = "Alice"; 
let greeting = 'Hello, world!';

// String concatenation
console.log("Hello" + " " + "World");     // result: "Hello World"

// Accessing characters
console.log(name[1]);            // result: l
console.log('Hello'.charAt(1));  // result: e |return character at specific index 

// String methods

console.log('hello'.toUpperCase());  // result: 'HELLO'
console.log('HELLO'.toLowerCase());  // result: 'hello'

console.log('JavaScript'.includes('Script'));  // result: true check if string have sub string
console.log('hello'.indexOf('e'))              // result: 1 | return index of matched sub string or -1

console.log('file.txt'.startsWith('file'));    // result: true | check if string start with sub string
console.log('image.png'.endsWith('.png'));     // result: true | check if string end with sub string

console.log('JavaScript'.slice(0, 4));  // result: 'Java'   | extract section from string start at 0 stop at 4 excluded
console.log('JavaScript'.slice(4));     // result: 'Script' | extract section from string start at 4 take till the end  
console.log('JavaScript'.slice(-6));    // result: 'Script' | extract section from string start at -6 take till the end (negative index mean count from end)

console.log('JavaScript'.substring(0, 4));           // result: 'Java' | work same as slice but it dont support negative index

console.log('JavaScript'.substr(4, 3)); // result: 'Scr' | take start index and number of character to extract

console.log('  hello  '.trim());       //result: 'hello'    | remove extra white space from both side
console.log('  hello  '.trimStart());  //result: 'hello  '  | remove extra white space from start
console.log('  hello  '.trimEnd());    //result: '  hello'  | remove extra white space from end

console.log('apple orange apple'.replace('apple','banana'));    // result: 'banana orange apple'  | replace first match
console.log('apple orange apple'.replaceAll('apple','banana')); // result: 'banana orange banana' | replace all match

console.log('ha'.repeat(3));  // result: 'hahaha' | create new string by repeating a text n time

console.log('5'.padStart(3, '0'));    // result: '005' | add special character to the start till the string match specific length
console.log('5'.padEnd(3, '!'));      // result: '5!!' | add special character to the end till the string match specific length

console.log('a,b,c'.split(','));      // result: ['a', 'b', 'c']  | split the string using a specified separator

console.log(['a', 'b', 'c'].join('-'));  // result: 'a-b-c' | combine and join array elements 