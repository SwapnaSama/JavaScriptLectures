const person = {
  firstName: "Swapna",
  lastName: "Sama",
  role: "Developer",
};

// traditional ways of accessing objects

console.log(person.firstName, person.lastName);

// accessing object using destructuring

const { role, firstName, lastName } = person; // keys = object

console.log(firstName);
console.log(role);

// order does not matter in object destructuring

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "pizzeria", "vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "GarlicBread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//Default values
console.log(restaurantName, hours); // hours will be undefined bcoz openingHours doesnot exits property in restaurant object
const { menu = [], starterMenu: starters = [] } = restaurant; // setuping undefined by '[]' symbol
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); //mutating
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
