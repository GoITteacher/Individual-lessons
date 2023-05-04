// FACTORY

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("Hello");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log("Woof");
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log("Myaw");
  }
}

function animalFactory(name, type) {
  switch (type) {
    case "cat":
      return new Cat(name);
    case "dog":
      return new Dog(name);
  }
}

const animal1 = animalFactory("Cezar1", "dog");
const animal2 = animalFactory("Cezar1", "cat");

animal1.speak();
animal2.speak();
