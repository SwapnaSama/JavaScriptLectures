// for loop keeps running while condition is true

for (let rep = 5; rep <= 10; rep++) {
  console.log(`lifting weights reptition ${rep}`);
}

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
