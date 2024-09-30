// Array With Functions Push ,Pop, shift, unshifts, Splice slice string function

let fruits = ["apple", "orange", "mango"];
console.log(fruits);

fruits.push("pineapple");
console.log(fruits);

const value = fruits.pop();
console.log(value, "value");
console.log(fruits);
fruits.unshift("banana");

console.log(fruits);

fruits.shift();
console.log(fruits);

let fruit = ["apple", "orange", "mango", "banana", "lichi", "kiwi"];

const value2 = fruit.splice(2, 3);
console.log(value2, "value2");
console.log(fruit);

let animal = ["deer", "lion", "dog", "cat", "whale"];

let animalRemove = animal.slice(3);
console.log(animal);
console.log(animalRemove);

// fruits.splice(startingIndex,delete item count,"item1",item2 )

const string = "Javascript";
console.log(string.toLowerCase());

const answer = "JavaScript is awesome";

const newValue = answer.split(" ");
console.log(newValue.length);

let names = ["john", "coldplay", "onedirection"];

for (let i = 0; i < names.length; i++) {
  let stringValue = names[i]
 
  names[i] = stringValue[0].toUpperCase() + names[i].slice(1);
}

console.log(names)
