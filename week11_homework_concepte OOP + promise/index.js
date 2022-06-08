// ---- Class HIGHWAY ------
function Highway(vehicleTypes) {
  this.vehicles = []; // Compozitie; has many Vehicles

  for (let vehicleType of vehicleTypes) {
    this.vehicles.push(new Vehicle(vehicleType));
  }
}

Highway.prototype.drive = function () {
  let str = "";
  for (let vehicle of this.vehicles) {
    if (this.vehicles.indexOf(vehicle) === this.vehicles.length - 1) {
      str += vehicle.type;
    } else {
      str += vehicle.type + ", ";
    }
  }
  console.log(`${str} are driving on Highway!`);
};

// ---- Class VEHICLES ------
function Vehicle(type) {
  this.type = type;
}
Vehicle.prototype = {
  drive() {
    console.log(`${this.type} is driving!`);
  },
};

// ---- Class CAR ------
function Car(type, name) {
  Vehicle.call(this, type); // Mostenire
  this.name = name;
}
Car.prototype = Object.create(Vehicle.prototype); // Mostenire

// Polimorfism
Car.prototype.drive = function () {
  console.log(`${this.name} is driving!`);
};

// ---------------------
const vehicle1 = new Vehicle("Car");
vehicle1.drive();

const vehicle2 = new Vehicle("Bus");
vehicle2.drive();

const highway = new Highway(["Car", "Bus"]);
highway.drive();

const car1 = new Car("car", "Dacia");
car1.drive();



///////////---------------PROMISE-------------//////////

// 1st Example
let ex1Fetch = () => {
  return fetch("https://swapi.dev/api/people/1/", { method: "GET" }).then(
    (response) => {
      return response.json();
    }
  );
};

let ex1Async = async () => {
  let response = await fetch("https://swapi.dev/api/people/1/", {
    method: "GET",
  });
  let data = await response.json();
  console.log(data.name + " from AsyncAwait");
};

ex1Fetch().then((data) => console.log(data.name + " from Fetch"));

ex1Async();

//2nd Example
const promise = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), time);
  });
};

const example2 = async () => {
  const start = new Date().getTime();

  const a = await promise(3000);
  console.log(a + " from AsyncAwait");

  promise(3000).then((response) => {
    console.log(response + " from Then");
    console.log("Duration: " + (new Date().getTime() - start) / 1000);
  });
};

example2();

//3rd Example
const example3 = async () => {
  const start = new Date().getTime();

  promise(3000).then((response) => {
    console.log(response + " from Then");
  });

  const a = await promise(3000);
  console.log(a + " from AsyncAwait");

  console.log("Duration: " + (new Date().getTime() - start) / 1000);
};

example3();
