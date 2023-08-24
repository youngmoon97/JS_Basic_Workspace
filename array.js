"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// index position
const fruits = ["apple", "banana"];
console.log(fruits);

// 3.Looping over an array
// a. 기본 for문

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

//4. Addition, deletion, copy
// push: add an item to the end

// pop: remove item from the end
// unshift: add an item to the beginning
// shift: remove an item from the beginning

// note! shift, unshift are slower then pop, push

// splice: remove an item by index position
fruits.push("strewberry", "peach", "lemon");
console.log(fruits);
fruits.splice(2, 1);
console.log(fruits);
fruits.splice(1, 1, "watermelon", "apple2");
console.log(fruits);

// combine two arrays
const fruits2 = ["mango", "coconut"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.includes("mango"));

// lastindexof
console.clear();
console.log(fruits);
fruits.push("apple");
console.log(fruits.lastIndexOf("apple"));
