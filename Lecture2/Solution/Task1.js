let fruits = ["apple", "banana", "mango"];

fruits.unshift("orange");

const bananaIndex = fruits.indexOf("banana");
if (bananaIndex !== -1) {
  fruits[bananaIndex] = "kiwi";
}

const fruitString = fruits.join(", ");
console.log(fruitString);