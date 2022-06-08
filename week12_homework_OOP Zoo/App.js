import database from "./database.js";
import Header from "./components/Header.js";
import Zoo from "./components/Zoo.js";
import Container from "./components/Container.js";
import Helpers from "./components/Helpers.js";

class App {
  static zooInit(zoo, database) {
    for (const data of database) {
      const animal = Helpers.createAnimalType(data);
      zoo.addAnimal(animal);
    }
  }

  static init(htmlRoot) {
    new Header(htmlRoot, { appName: "My Zoo" });

    const container = new Container(htmlRoot, "zoo");

    const zoo = new Zoo(container.containerId);

    App.zooInit(zoo, database);

    // auto breed
    // function onlyUnique(value, index, self) {
    //   return self.indexOf(value) === index;
    // }

    // let animalTypes = database.map((data) => data.type).filter(onlyUnique);

    // const interval = window.setInterval(() => {
    //   zoo.breed(animalTypes[Math.floor(Math.random() * animalTypes.length)]);
    // }, 2 * 1000);

    // setTimeout(() => {
    //   window.clearInterval(interval);
    // }, 60 * 1000);
  }
}

window.addEventListener("load", App.init.bind(null, "root"));
