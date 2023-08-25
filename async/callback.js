"use strict";

// JavaScript in stynchronous
// Execute the code block by order after hoisting
// hoisting: var, functio declaration
console.log("1");
setTimeout(() => {
  // 함수가 브라우저에 요청 1초 뒤 해줘
  console.log("2");
}, 1000);
console.log("3"); // 1 3 2

// Synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello")); // 1 3 hello 2
// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000); // 1 3 hello 2 async callback

// Callback hell example

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "moon" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "moon") {
        onSuccess({
          name: "mooon",
          role: "admin",
        });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(user, (userWithRole) => {
      alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
    });
  },
  (error) => {
    console.log(error);
  }
);
