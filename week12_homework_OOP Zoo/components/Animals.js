import Animal from "./Animal.js";

class Bear extends Animal {
  imgSrc = "./images/bear.png";
  constructor(gender) {
    super("bear", gender);
  }
  makeNoise() {
    return "Honey?";
  }
}

class Elephant extends Animal {
  imgSrc = "./images/elephant.png";
  constructor(gender) {
    super("elephant", gender);
  }
  makeNoise() {
    return "Living sprinkler!";
  }
}

class Fox extends Animal {
  imgSrc = "./images/fox.png";
  constructor(gender) {
    super("fox", gender);
  }
  makeNoise() {
    return "I'm fabulous!";
  }
}

class Giraffe extends Animal {
  imgSrc = "./images/giraffe.png";
  constructor(gender) {
    super("giraffe", gender);
  }
  makeNoise() {
    return "Hey Shorty!";
  }
}

class Koala extends Animal {
  imgSrc = "./images/koala.png";
  constructor(gender) {
    super("koala", gender);
  }
  makeNoise() {
    return "Nom Nom Nom!";
  }
}

class Monkey extends Animal {
  imgSrc = "./images/monkey.png";
  constructor(gender) {
    super("monkey", gender);
  }
  makeNoise() {
    return "Banana?";
  }
}

class Penguin extends Animal {
  imgSrc = "./images/penguin.png";
  constructor(gender) {
    super("penguin", gender);
  }
  makeNoise() {
    return "Happy feet!";
  }
}

class Turtle extends Animal {
  imgSrc = "./images/turtle.png";
  constructor(gender) {
    super("turtle", gender);
  }
  makeNoise() {
    return "Not too fast!";
  }
}

export { Bear, Elephant, Fox, Giraffe, Koala, Monkey, Penguin, Turtle };
