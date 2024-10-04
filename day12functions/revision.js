function print() {
  //normal function
  console.log("one");
}

function print2() {
  console.log("two");
}
function print3() {
  console.log("three");
  return function show() {
    console.log("nested function");
  };
}

const showOuput = print3();
console.log(showOuput);
showOuput();
print();
print2();

//arrow function and variable function

const valueOutput = function (b, a) {
  console.log("variable function");

  return a + b;
};
let a = 12;
let b = 5;
const getOutPut = valueOutput(a, b);

const arrowFun = () => {
  console.log("arrow function");
};

arrowFun();

const getSum = (a, b) => a + b;

console.log(getSum(10, 5));

// Closure

function outerFunction() {
  //lexical environment
  let a = 5;
  let b = 1;

  function innerFunction() {
    console.log(a + b);
  }

  a = 10;

  return innerFunction();
}

const getFunction = outerFunction();

// getFunction();

// function outerexample() {
//   let f = 1;
//   let g = 2;
// }
// outerexample();

// function example() {
//   console.log(f + g);
// }
// example();
