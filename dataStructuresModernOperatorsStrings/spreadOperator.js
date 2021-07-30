// spread operator extracts values from array or object and can be used in the program
// Spread operator is used to unpack elements in array
const arr = [1, 2, 3];

console.log(...arr);
console.log(arr);

const ar = [2, 3, 4];
const badNewAr = [1, 9, arr[0], arr[1], arr[2]];
console.log(badNewAr);

const newAr = [1, 2, ...ar];
console.log(newAr);

function sum(a, b) {
  return a + b;
}

//traditional way of passing values to function
console.log("the sum is " + sum(arr[0], arr[1]));

//using spread operator - array
console.log("the sum is " + sum(...arr));

//spread operator in object

const circle = {
  radius: 9,
};

const fullCircle = {
  diameter: 10,
};

fullCircle.radius = circle.radius; //traditional way

console.log(fullCircle);

const halfCircle = {
  diameter: 4,
  ...circle, // radius: 9
};

console.log(halfCircle);

// iterables : arrays, strings, maps, sets. NOT Objects
const str = "sassss";
const letters = [...str, " ", "s."];
console.log(...letters); // used spread operator when building an array or only when we pass values into the function.
console.log(...str);
