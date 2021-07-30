//  AND, OR OPERATOR  (Logcal Operator)
// These can be use ANY data type, Return ANY data type, short-Circuiting

// OR Operator

//short-Circuiting in OR Operator means if first values is truthy value then it immediately returns first value
//if the first operand is truthy here in the or operotor other operands will not be even evaluated so that is "Short-Circuiting".
console.log(3 || "sap"); // returns value "3" bcoz it is truthy values and it doesnot check/evaluate "sap" value operand.
console.log("" || "sap"); // sap is truthy value
console.log(true || 0); // true is truthy value
console.log(undefined || null); // undefined is a falsy values so it returns null but even null is falsy value

// or operator looks for truthy value if it finds, stops looking and prints it

console.log(undefined || 0 || "" || "hello" || 23 || null);

numGuests = 23;
const guests1 = numGuests ? numGuests : 10;
console.log(guests1);

const guests2 = numGuests || 10;
console.log(guests2);

// AND Operator: if first operand is truthy value then evaluation continuous and it returns last operand value
console.log(0 && "sap"); // if first value is falsy value then it returns falsy without evaluating next operand value
console.log(7 && "sap"); // sap value returns

console.log("hello" && 23 && null && "sapp"); // null

console.log(1 && 6 && 2 && 4);

// or operator looks for true, and if it does not find truthy values, prints last falsy value
// and operator looks for false, and if it does not find falsy values, prints last truthy value
