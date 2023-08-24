// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1+2 =${1 + 2}`);

// 2. Numeric operatiors
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(1 % 1);
console.log(1 ** 1);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter= counter+1;
// preIncrement = counter;

console.log(`Increment: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter+1;
console.log(`postIncrement: ${postIncrement}, counter:${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter:${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter:${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;

// 5. Comparison operator
console.log(10 < 6);

// 6. Logical operators : || (or), &&(and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthly value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("nooo");
  }
  return true;
}

console.log(!value1);

// 7.Equality
const stringFive = "5";
const numberFive = 5;
// == loose equilty, with type conversion
console.log(stringFive == numberFive);

// === stricty equlity, no type conversin
console.log(stringFive === numberFive);

// object equlity by reference
const moon1 = { name: "moon" };
const moon2 = { name: "moon" };
const moon3 = moon1;
console.log(moon1 == moon2);
console.log(moon1 === moon2);
console.log(moon1 === moon3);

// 8.Conditional operator: if
// if,else if ,else
const name = "df";
// 9. Ternary operator : ?
// condition ? value1 : value2
console.log(name == "moon" ? "yes" : "no");

// 10. switch
