// try catch
// throw
// finally

//jQuery Form validation

// let arr = ["red", "blue", "red", "green", "blue", "blue"]

// let obj1 = {red: 2,blue:3,green:1,}

// let obj = {};

// for(let i=0;i<arr.length;i++){
//   // console.log(obj[arr[i]]);

//   if(obj[arr[i]] == undefined){
//   obj[arr[i]] = 1;
//   console.log(obj[arr[i]]);
//   }else{
//     obj[arr[i]]++;

//   }
// }
// console.log(obj)

let data = true;
let load = false;
console.log("helloworld1");
console.log("helloworld2");

//try catch
try {
  // throw "error of data";
  load = true;

  if (data) {
    console.log("data get successfully");
  } else {
    load = true;
    throw "data get failed";
  }
} catch (error) {
  console.log("error", error);
} finally {
  load = false;
}
console.log("helloworld4");
console.log("helloworld5");

//read about querySelectorAll and querySelector

console.log(Math.max() > Math.min());

const date = new Date();
console.log(date);
