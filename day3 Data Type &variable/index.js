// 1. Variables Introduction:
// Variables are containers for storing data values. 
// We can declare variables using "let", "var", and "const".

// 2. Data Types:
// There are two main types of data in JavaScript:
// - Primitive types: "string", "number", "boolean", "undefined", "null".
// - Non-primitive types: "object", "array".

// Example of logging strings and numbers:
console.log("helloworld"); // Outputs: helloworld
console.log(1234); // Outputs: 1234

// Checking data types using typeof:
console.log(typeof("helloworld")); // Outputs: string
console.log(typeof(true)); // Outputs: boolean

// Example of declaring and assigning values to variables:

// Using "let":
let a = null; // 'a' is declared with let and assigned null value
console.log(a); // Outputs: null

a = 2; // 'a' is reassigned a value of 2
console.log(a); // Outputs: 2

// Using "var":
var b = 5; // 'b' is declared with var and assigned a value of 5
console.log(b); // Outputs: 5

b = 10; // 'b' is reassigned a value of 10
console.log(b); // Outputs: 10

// Using "const":
const c = 6; // 'c' is declared with const and assigned a value of 6
console.log(c); // Outputs: 6

// Trying to reassign a const variable (will cause an error)://it means const variable cannot be reassigned
// c = 10; 



var hero = "jerry";
{
  hero = "tom"; 
}
console.log(hero); 

let d; 
d = null; 
console.log(d); 
