// 1. Use strict
// added in ES5
// use this for Valina Javascript
"use strict";

// 2. Variablem rw(read, write)
// let (added in ES6)
let globalName = "globalname";
{
  let name = "moon";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't  ever use this!)
// var hoistion(move declaration from botton to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible
// only use let if variable need to change
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects(i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few resons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single Item: number, string, boolea, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinityym, NaN

const infinity = 1 / 0;
const negetiveInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negetiveInfinity);
console.log(nAn);

// bitInt

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}`);
const hellobob = `hi ${brendan}`;
console.log(hellobob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// Symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 == symbol2);
const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 == gsymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const moon = { name: "moon", age: 20 };
moon.age = 21;
console.log(moon.age);

// 5. Dynamic typing: dynamically typed language
// 타입 혼동때문에 TypeScript가 나옴 => 나중에 공부하면 댐
// BABEL
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
