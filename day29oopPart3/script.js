function Animal(name, sound) {
  this.name = name;
  this.sound = sound;

  this.showSound = () => {
    console.log(`name ${name} sound ${sound}`);
  };
}

Animal.prototype.makeSound = function () {
  console.log(this.name + " says " + this.sound);
};

function Dog(name, sound, type) {
  //call method in first argument always object ,this keyword

  Animal.call(this, name, sound); // inerhitence from Animal

  this.type = type;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.showType = function () {
  console.log(this.type);
};

let myDog = new Dog("Buddy", "Woof", "Labrador");

myDog.showSound(); //normal method
myDog.makeSound(); //prototype method of Animal



// console.log(a())// temporal dead zone // reference error
let a = function (){
  console.log('Hello World');
}

console.log(b) // undefined 

//hosting 
// 1run  varibale name assigned with 
//2run  variables name   assigned with value

var b ="asd"
console.log(b)