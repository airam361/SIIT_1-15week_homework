class Highway {
  constructor(vehicles) {
    this.vehicles = vehicles;
  }
  traffic() {
    for (let vehicle of this.vehicles) {
      vehicle.drive();
    }
  }
}

class Vehicle {
  constructor(name, color, engine, fuel, wheels) {
    this.name = name;
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.wheels = wheels;
  }
  drive() {
    console.log(`${this.name} is driving`);
  }
  park() {
    console.log("parking");
  }
}

class Car extends Vehicle {
  wheels = 4;
  constructor(name, color, engine, fuel) {
    super(name, color, engine, fuel, Car.wheels);
  }
}

class Motorcycle extends Vehicle {
  wheels = 2;
  constructor(name, color, engine, fuel) {
    super(name, color, engine, fuel, Motorcycle.wheels);
  }
}

class Bus extends Vehicle {
  color = "yellow";
  wheels = 12;
  constructor(name, engine, fuel) {
    super(name, Bus.color, engine, fuel, Bus.wheels);
  }
}

let car = new Car("dacia", "white", "internal combustion", "diesel");
console.log(car);

let moto = new Motorcycle("vespa", "white", "internal combustion", "gasoline");

console.log(moto);

let bus = new Bus("volvo", "internal combustion", "gasoline");

console.log(bus);

const highway = new Highway([car, moto, bus]);
highway.traffic();
