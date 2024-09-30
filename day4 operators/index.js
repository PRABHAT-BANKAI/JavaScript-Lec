// Arithmetic Operations Examples
let a = 10;
let b = 5;

// Addition
let addition = a + b; // /output 15
console.log("Addition:", addition);

// Subtraction
let subtraction = a - b; // output 5
console.log("Subtraction:", subtraction);

// Multiplication
let multiplication = a * b; // output 50
console.log("Multiplication:", multiplication);

// Division
let division = a / b; // output  2
console.log("Division:", division);

// Modulus (remainder)
let modulus = a % b; // output  0
console.log("Modulus:", modulus);

// Exponentiation
let exponentiation = a ** 2; //output  100 means multiplication by itself
console.log("Exponentiation:", exponentiation);

// Increment (prefix and postfix)
 a++; // Postfix increment: a becomes 11
++b; // Prefix increment: b becomes 6

// Decrement (prefix and postfix)
a--; // Postfix decrement: a becomes 10
--b; // Prefix decrement: b becomes 5

let number = 15;
let age = 18;
let result = ++number; // prefix

console.log(result); //  first increment  output is 16

let result2 = age++; // postfix
console.log(result2); // first assign the value then increment  so output is still 18

// Assignment Operators Examples

let c = 10;

// Basic Assignment
c = 20;

// Add and Assign
// c = c + 5; output 25
c += 5; // 25

// Subtract and Assign
// c = c - 5; output 20
c -= 5; // 20

// Multiply and Assign
// c = c * 5; output 40
c *= 2; // 40

// Divide and Assign
// c = c / 5; output 10
c /= 4; // 10

// Exponent and Assign (multication by itself)
c **= 2; // 100


// Comparison Operators Examples
let value = 18;
let value2 = 18;

// Equal (abstract equality)
console.log(value == value2,"output"); //true

// Strictly Equal
console.log(value === value2); // false

// Not Equal
console.log(value != value2); 

// Strictly Not Equal
console.log(value !== value2); // true

// Greater Than
console.log(value > value2); // false

// Less Than
console.log(value < value2); // true

// Greater Than or Equal
console.log(value >= value2);

// Less Than or Equal
console.log(value <= value2); // true

// Logical Operators Examples

// Logical AND &&
console.log(true && true && true); // true
// Logical ||
console.log(false ||12 || false); // true

// Conversion Operators Examples
let string = "123";

// Convert String to Number
let result9 = Number(string);

console.log(typeof(string)); // string

let value5 = String(123456);

// Convert Number to String
console.log(value5); // "123456"

