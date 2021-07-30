//

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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [item, element] of menu.entries()) {
  console.log(`${item + 1}: ${element}`);
}

// cj

c;

//iterating objects using for-in loop

const chair = {
  name: "swapna",
  model: "pushBack",
  cost: 10000,
};

for (const key in chair) {
  console.log(key, ": ", chair[key]);
}
console.log(chair["cost"]);

const a = 2;

a = 6;
