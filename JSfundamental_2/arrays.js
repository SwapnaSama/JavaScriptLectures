const friend1 = "raki";
const friend2 = "janu";
const friend3 = "raji";

//arrays
const friends = ["raki", "janu", "raji"];
console.log(friends);

//another method in array
const y = new Array(1990, 2000, 2050, 3000);
console.log(y);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length); // lenght is to count the number of elements in array
console.log(friends[friends.length - 1]); // to get last index element in the array, 2nd position is raji ie; 3-1 = 2

friends[2] = "king";
console.log(friends); // array is not primitive value so it can mutable so if we use const variable but array can change it

const firstName = "raki";
const raki = ["raki", "sama", 2037 - 1994, "brother", friends];
console.log("raki");
console.log(raki.length);

// //Exeercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1991, 1992, 1993, 1994];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

//example - cj

// array can store multiple objects,strings, numbers. more than one can be stored

// sum and count the numbers in an array

const numbers = [1, 2, 3, 4];

function sumOfArray(params) {
  let sum = 0;
  // for loop iteration
  // looping arrays
  for (let i = 0; i < params.length; i++) {
    if (params[i] == 2) {
      continue;
    }
    sum = sum + params[i];
    if (sum == 6) {
      break;
    }
  }

  return sum;
}

console.log(numbers);

console.log("The sum of given array is : " + sumOfArray(numbers));
