// restPatter and restParameters are opposite to spread operator
// Rest pattern collects unused values keep  them packed in array

//rest operator can be used as a last part of assignment

//spread, bcoz on right side =
const arr = [1, 3, ...[4, 6]];
console.log(...arr);

// REST, BCOZ on LEFT side =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// // wrong pattern
// const [...other, a] = [1,2,3]; // syntax error
// console.log(...other, a);

//note: REST Syntax collects all the array elements after the last variable

// Rest Pattern in Objects
const person = {
  role: "developer",
  firstName: "Swapna",
  lastName: "Sama",
};
const { role, ...name } = person;
console.log(name);
console.log(role);
// while using rest pattern, we can create a new variable to extract other properties

// function using Rest Parameters
const add = function (...numbers) {
  let sum = 0;
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  // sum += numbers[i] is same as sum = sum + numbers[i]
  console.log(sum);
};
add(2, 3);
add(5, 3, 6, 2);
add(2, 1, 3, 6, 9, 4);

const x = [2, 4, 5];
add(...x); //acts as spread operator
