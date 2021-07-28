// restPatter and restParameters are opposite to spread operator
// Rest pattern collects unused values keep  them packed in array

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
  firstName: "Swapna",
  lastName: "Sama",
  role: "Developer",
};
const { pay, ...lastName } = person.role;
console.log(lastName);

// function using Rest Parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 6, 2);
add(2, 1, 3, 6, 9, 4);

const x = [2, 4, 5];
add(...x);
