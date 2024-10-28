// let  //block scope
// const

// var

// if(true){
// const num = 0

// }
// console.log(num)

// let value =12
// let value = 45

// var value= 12 // global scope
// var value = 15

// hoisting

// var num = undefined;

// console.log(num);

// var num = 12;

// console.log(num);

// console.log(userName);
// //temporal deadzone
// //reference error
// let userName = "bruce";

// console.log(userName);






var userAge = 33;
function hello() {

  console.log(userAge); //1 output undefined
  var userAge = 22;
  console.log(userAge); //2 output 22
}

hello();

console.log(userAge);
