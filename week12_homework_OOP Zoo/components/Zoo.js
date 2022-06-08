import Helpers from "./Helpers.js";
import Animal from "./Animal.js";

class Zoo {
  animals = {};
  constructor(htmlId) {
    this.htmlId = htmlId;
    this.render();
  }

  showAnimals() {
    console.log(this.animals);
  }

  addAnimal(animal) {
    //primeste un animal instantiat ex:"Bear"
    if (!(animal instanceof Animal)) {
      throw new Error("This is not an animal!");
    }
    if (!Object.keys(this.animals).includes(animal.type)) {
      this.animals[animal.type] = [];
    }
    this.animals[animal.type].push(animal);
    this.render();
  }

  breed(type) {
    if (
      this.animals[type].some(
        (animal) => animal.type === type && animal.gender === "m"
      ) &&
      this.animals[type].some(
        (animal) => animal.type === type && animal.gender === "f"
      )
    ) {
      this.addAnimal(
        Helpers.createAnimalType({ type, gender: Helpers.randomGender() })
      );
    } else {
      alert(`Cannot breed ${type}!`);
      return;
    }
    this.showAnimals();
  }

  render() {
    const renderHook = document.getElementById(this.htmlId);
    renderHook.innerHTML = "";

    for (let key in this.animals) {
      const animals = document.createElement("div");
      animals.className = "card";

      for (let animal of this.animals[key]) {
        animal.render(animals);
      }
      const btnBreed = document.createElement("button");
      btnBreed.className = "card__btn-breed";
      btnBreed.innerHTML = "<span>Breed</span>";

      btnBreed.addEventListener("click", this.breed.bind(this, key));
      animals.append(btnBreed);

      renderHook.append(animals);
    }
  }
}

export default Zoo;
