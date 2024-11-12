class Animal {
  #name;
  constructor(name, sound) {
    this.#name = name;
    this.sound = sound;
  }

  #makeSound() {
    console.log(`${this.#name} makes ${this.sound}`);
  }
}

// let dog = new Animal("tigger", "woof", "pitbull");
// console.log(dog);
// dog.makeSound();

class Dog extends Animal {
  constructor(name, sound, type) {
    super(name, sound);
    this.type = type;
  }

  showType() {
    console.log(`This is a ${this.type} dog.`);
  }
}

const pet = new Dog("tigger", "woof", "pitbull");

pet.makeSound();

pet.showType();

// console.log(pet.name)

pet.name = "poo";
pet.makeSound();
