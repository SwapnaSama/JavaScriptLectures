// (ES6) Enhanced Object literals:
const name = "tony";
const color = "brown"; // variable declaration

//using Object literals enhancement // combine all variables into one object
const dog = {
  name,
  color,
};
console.log(dog);

// by using object literal enhancment // without function keyword
// New syntax without function keyword

const driver2 = {
  name: "Jane",
  speed: 60,
  car: "McLaren",
  speedUp(speedup) {
    this.speed = this.speed + speedup;
    console.log("new speed = " + this.speed);
  },
};
// console.log(driver2);
console.log("new speed = " + this.speed);
