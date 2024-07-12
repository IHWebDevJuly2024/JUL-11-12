// HOISTING
/*
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
*/

console.log(username); // this is undefined
sayHi(); // this function runs thanks to hoisting

var username = "Marcel"; // we are not giving it a value until this line

function sayHi() {
  console.log("Hello world inside a function!");
}

// WHat happens if I do it with const
// console.log(surname); // this throws an error

const surname = "García";

// sayBye(); // this also throws an error

const sayBye = () => {
  console.log("BYE BYE my friend!");
};
