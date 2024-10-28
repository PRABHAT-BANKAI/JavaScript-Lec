//Encapsulation
//abstraction
//inheritance
//polymorphism

function UserData(name, hero, rich) {
  this.name = name;
  this.hero = hero;
  this.rich = rich;
}

//prototype
UserData.prototype.sayHello = function () {
  console.log(
    `Hello, my name is ${this.name}. I'm a ${this.hero}. My wealth is ${this.rich}.`
  );
};

let bruce = new UserData("bruce", "batman", "bill");
let ironMan = new UserData("tony", "ironman", "mill");

console.log(bruce);
bruce.sayHello();
ironMan.sayHello();

// Array.prototype.push = function (num) {
//   return "Prank"
// };

let arr = [1, 2, 3, 4, 5, 5];

console.log(arr.push(40));
console.log(arr);

console.log(bruce.sayHello() == ironMan.sayHello());
f;
