// optional chaining (?.) - returns Undefined instead of throwing an error
//if you attempt to access a property of a Null or Undefined

// objects using optional chaining
const key = "lastName";

const person1 = {
  firstName: "tony",
  lastName: "sa",
};

const person2 = {
  status: "active",
};

console.log(person1?.[key]); // returns 'sa'
console.log(person2?.[key]); // returns undefined

// arrays using optional chaining
const ar = ["sam", "jam", "coffee"];
const ar1 = [1, 2];

console.log(ar?.[2]); // returns coffee
console.log(ar1?.[2]); // returns undefined
