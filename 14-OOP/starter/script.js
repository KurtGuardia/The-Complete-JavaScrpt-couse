'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a maker and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


const Car = function (maker, speed) {
  this.maker = maker;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`We are going at ${this.speed} km/hr`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`We are going at ${this.speed} km/hr`);
};

const bmwCar = new Car('BMW', 120);
const mercedesCar = new Car('Mercedes', 95);
bmwCar.accelerate();
bmwCar.accelerate();
bmwCar.accelerate();
mercedesCar.brake();
mercedesCar.brake();
mercedesCar.brake();

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
const Car = function (maker, speed) {
  this.maker = maker;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
};
// class Car {
//   constructor(maker, speed) {
//     (this.maker = maker), (this.speed = speed);
//   }

//   accelerate(speed) {
//     this.speed += 10;
//     console.log(this.speed);
//   }

//   brake(speed) {
//     this.speed -= 5;
//     console.log(this.speed);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed * 1.6;
//   }
// }

/*
const bmw = new Car('BMW', 120);
bmw.accelerate();
console.log(bmw.speedUS);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a maker and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const EV = function (maker, speed, charge) {
//   Car.call(this, maker, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeTo = function (charge) {
//   this.charge = charge;
// };

// EV.prototype.accelerateEV = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `Your ${this.maker} is going ${this.speed} km/h and has ${this.charge}% of battery`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.maker} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.maker} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(maker, speed, charge) {
    super(maker, speed), (this.#charge = charge);
  }

  accelerateEV() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `Your ${this.maker} is going ${this.speed} km/h and has ${
        this.#charge
      }% of battery`
    );
    return this;
  }

  chargeTo(charge) {
    this.#charge = charge;
    return this;
  }
}

const tesla = new EVCl('tesla', 120, 80);

tesla.chargeTo(90).accelerateEV().brake();
