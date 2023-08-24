// Objects
// one of the JavaScript's data types

// 1. Literals and properties
const obj1 = {};
const obj2 = new Object();

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const moon = { name: "moon", age: 4 };
print(moon);

moon.hadJob = true;
console.log(moon.hadJob);

delete moon.hadJob;

// 2. computed properties
console.log(moon.name);
console.log(moon["name"]);

// 3. Property value shorthand

const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("moon", 23);

// 4. Constructor Function
console.log(person4);
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 5. in operator
console.log("name" in moon);
console.log(moon.random);

// 6. for..in vs for..of
// for(key in obj)
console.clear();
for (key in moon) {
  console.log(key);
}

//for( value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. Fun Cloning
// Object.assign(dest, [obj1], , , )

const user = {
  name: "moon",
  age: 20,
};
const user2 = user;
user2.name = "coder";
console.log(user);

const user4 = {};
Object.assign(user4, user);
console.log(user4);
