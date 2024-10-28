// Array With Functions (map ,filter, foreach, indexof, findindex ,includes, every, some)

let arr = [1, 22, 3, 4, 5, 2, 4, 3, 5];

let animals = ["lion","huskey","sheep","dog","huskey", "huskey"]

//map first step create new array  second step updated elements push new array 3rd return new array
function fun(element) {
  return element.toUpperCase()
}

let newArray = animals.map(fun);

console.log(newArray,"map");

const filterResult = arr.filter((element) => {
  return element == 10;
});

console.log(filterResult ,"filter");

let sum = 0;

const foreachValue = arr.forEach(function (element) {
  sum += element;
});


console.log(sum);

console.log(foreachValue);

console.log(animals.indexOf("huskey",2)) 


const index = arr.findIndex((item)=>{
 
 return item > 34
})
console.log(index); 



//includes
const includesValue = animals.includes("huskey")

console.log(includesValue,"includes");

// HOF high order function   examples : .map .filter  


const everyValue = arr.every(function (element){
  return  element > 10;
})

console.log("every",everyValue)

const someValue = arr.some(function (element){
  return  element > 10;
})

console.log("some",someValue)


const num=["1","5","","9","10","11"]
console.log(num.length)

const result = num.push("2")
const result2 = num.pop()

console.log(result)
console.log(num)


