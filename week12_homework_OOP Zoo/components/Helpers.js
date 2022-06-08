import {Bear, Elephant, Fox, Giraffe, Koala, Monkey, Penguin, Turtle} from "./Animals.js"

class Helpers {
  static createAnimalType(data) {
    switch (data.type) {
      case "bear":
        return new Bear(data.gender);
      case "elephant":
        return new Elephant(data.gender);
      case "fox":
        return new Fox(data.gender);
      case "giraffe":
        return new Giraffe(data.gender);
      case "koala":
        return new Koala(data.gender);
      case "monkey":
        return new Monkey(data.gender);
      case "penguin":
        return new Penguin(data.gender);
      case "turtle":
        return new Turtle(data.gender);
    }
  }
  static randomGender() {
    const gender = ["m", "f"];
    return gender[Math.round(Math.random())];
  }

  static idGenerator() {
    return Math.floor(Math.random() * Math.pow(10, 9));
  }
}

export default Helpers