import Helpers from "./Helpers.js";
import Popup from "./Popup.js";

class Animal {
  constructor(type, gender) {
    this.type = type;
    this.gender = gender;
    this.id = Helpers.idGenerator();
  }

  makeNoise() {
    return "Roar!";
  }

  render(renderHook) {
    const animal = document.createElement("div");
    animal.className = "card__img-wrapper";

    animal.addEventListener("click", (event) => {
      new Popup(event, this.makeNoise);
    });

    if (this.gender === "f") {
      animal.style.backgroundColor = "#FFAFCC";
    } else {
      animal.style.backgroundColor = "#BDE0FE";
    }
    const img = document.createElement("img");
    img.src = this.imgSrc;
    animal.append(img);
    renderHook.append(animal);
  }
}

export default Animal;
