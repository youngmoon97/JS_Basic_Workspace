// Function
// - funfamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function == one thing
// naming: deSomething, command, verb
// e.g. createCardAndPoint -> createCardm createPoint
// function is object in JS

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("hello@");
log(123);
// TypeScript 홈페이지 플래이그라운드

// 2.Parameters
// primitive parameters: passed by value
// object paramaeters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const moon = { name: "moon" };
changeName(moon);
console.log(moon);

// 3. Default parameters(added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서는 밖을 볼 수 있다.

let globalMessage = "global";
function printMessage() {
  let message = "hello";
  console.log(message);
  console;
}

// 6. return value
function sum(a, b) {
  return a + b;
}

// 7. Early return, early exit
// 빨리 리턴하고 필요한 로직은 뒤로

// 8. Arrow function
// always anonymous
const simplePrint = () => {
  console.log(";sdad");
};

// IIFE: Immediately Invoked Function Expression
