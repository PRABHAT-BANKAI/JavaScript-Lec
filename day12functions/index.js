//Data types

//Primitive types
// Number
// String
// Boolean
// bigInt
//Symbol

// non primitive (reference)
// Array
// Object
// function
let obj1 = {};
let obj2 = obj1;
console.log(obj1 === obj2); //true
let data = { name: "Bruce", hero: "batman" };



//Nested Function
// Arrow functions
// anonymous function
// variable function

// let string = "Function";

// for (let i = 0; i <= string.length - 1; i++) {
//   if (string[i] == "t") {
//     string[i] = "a";
//   }
// }

// console.log(string + "add");

// let nameArray = ["bruce", "loki", "peter", "chris"];

// for (let j = 0; j < nameArray.length; j++) {
//   if (nameArray[j] == "loki") {
//     nameArray[j] = "Thor";
//   }
// }

// console.log(nameArray);

// let num = 53;
// let prime = false;
// let count = 0;

// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     count++;
//   }
// }
// if (count == 2) {
//   prime = true;
// }

// if (prime) {
//   console.log(`${num} is prime`);
// } else {
//   console.log(`${num} is not prime`);
// }

// console.log(count);

function fun() {
  console.log("hello world");
}

// fun();

// function outerFunction(){
//   console.log("OuterFunction")

//   innerFunction();

//   function innerFunction(){
//     console.log("InnerFunction")
//   }

// }

//Closures
// prime()

// console.log(numbers)

// var numbers = 123

// const prime = function(){
// console.log("prime")
// }

//arrow function
// const funFunction =()=>{
//   console.log("funFunction")
// }

// funFunction()

// IIFE (immediately invoked function expression)
(function () {
  console.log("IIFE");
})();

// return

function game() {
  let a = 1;
  let b = 2;
  console.log("game before return ");
  return a + b;
  console.log("game after return ");
}
console.log(game());
