"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "pizzeria", "vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "GarlicBread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // destructuringArrays means leftside before '=' symbol this is destructuring assignment
console.log(x, y, z);
console.log(arr);

//destructuring assignment
const [first, second] = restaurant.categories;
console.log(first, second);

const [frist, , seond] = restaurant.starterMenu; // frist and , space skips second and second element becomes third element
console.log(frist, seond);

let [main, , secondary] = restaurant.categories; // mutating variables using destructuring arrays
console.log(main, secondary);

// Switching Variables
// const temp = main; // temporary variable
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//destructuring assign to variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Destructuring
const nested = [2, 4, [5, 6]]; //array inside array
// const [i, , j] = nested;
// console.log(i,j);
const [i, , [j, k]] = nested; //destructuring inside destructuring
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// cj

// traditional array access
const ar = [1, 3];
console.log(ar[0], ar[1]);

// destructring arrays - values of array will be taken and assigned to variables.

console.log("destructuring..");
const [a1, b1] = [1, 3, 4];

console.log(a1, b1);

// order of variables matters when destructuring arrays.

//cj

// mutating arrays using spread operator
// const arr1 = [1, 3, 4, 5];
// const arr2 = [5, 6, ...arr1];
// console.log(arr2);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1;

arr2[3] = 9;

console.log(arr1);

//mutation in Objects
const person = {
  firstName: "sap",
  lastName: "sama",
};
const person1 = person;

person1.role = "developer";
console.log(person);
