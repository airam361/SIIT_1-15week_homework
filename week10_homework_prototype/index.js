function Vehicle(name, color, engine, fuel, wheels) {
  this.name = name;
  this.color = color;
  this.engine = engine;
  this.fuel = fuel;
  this.wheels = wheels;
}
Vehicle.prototype = {
  constructor: Vehicle,
  drive() {
    console.log("driving");
  },
  park() {
    console.log("parking");
  },
};

function Car(name, color, engine, fuel) {
  Vehicle.call(this, name, color, engine, fuel, Car.WHEELS);
}
Car.WHEELS = 4;
Car.prototype = {
  ...Vehicle.prototype,
  constructor: Car,
};

function Motorcycle(name, color, engine, fuel) {
  Vehicle.call(this, name, color, engine, fuel, Motorcycle.WHEELS);
}
Motorcycle.WHEELS = 2;
Motorcycle.prototype = {
  ...Vehicle.prototype,
  constructor: Motorcycle,
};

function Fleet(fleetName, lotNumber) {
  this.name = fleetName;
  this.lotNumber = lotNumber;
  this.fleet = [];
}
Fleet.prototype = {
  add(vehicle) {
    this.fleet.push(vehicle);
    this.log();
  },
  remove(vehicle) {
    if (this.fleet.indexOf(vehicle) > -1) {
      this.fleet.splice(this.fleet.indexOf(vehicle), 1);
    }
    this.log();
  },
  log() {
    console.log(this.fleet);
  },
};

let auto1 = new Car("dacia", "white", "internal combustion", "diesel");
let auto2 = new Car("skoda", "white", "internal combustion", "diesel");
let auto3 = new Car("jeep", "white", "internal combustion", "diesel");
let auto4 = new Car("volvo", "white", "internal combustion", "diesel");

let moto1 = new Motorcycle("dacia", "white", "internal combustion", "gasoline");
let moto2 = new Motorcycle("skoda", "red", "internal combustion", "gasoline");
let moto3 = new Motorcycle("jeep", "green", "internal combustion", "gasoline");
let moto4 = new Motorcycle("volvo", "blue", "internal combustion", "gasoline");

let carFleet = new Fleet("Car Fleet", 4652);
let motorcycleFleet = new Fleet("Motorcycle Fleet", 2365);

carFleet.add(auto1);
carFleet.add(auto2);
carFleet.add(auto3);
carFleet.add(auto4);
carFleet.remove(auto2);

motorcycleFleet.add(moto1);
motorcycleFleet.add(moto2);
motorcycleFleet.add(moto3);
motorcycleFleet.add(moto4);
motorcycleFleet.remove(moto2);
