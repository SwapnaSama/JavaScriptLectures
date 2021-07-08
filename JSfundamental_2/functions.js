// function raki(){
//     console.log('My brother is amazing');
// }

// // calling /running / invoking function // calling 4 times 
// raki();
// raki();
// raki();
// raki();

// fruitProcessor(5, 9);

// // apples and oranges are 'parameters' for function name ie; fruitProcessor 
// function fruitProcessor(apples, oranges){
//  console.log(apples, oranges);
//  const juice = `Juice with ${apples} apples and ${oranges} oranges.`; //using template literal
//  return juice;
// } 

//  fruitProcessor(5, 9); // calling a function 
//  console.log(fruitProcessor(5 ,9));

// //either above method or below method can be used 

// const juices = fruitProcessor(4, 6); // calling a function ie; fruitProcessor
// console.log(juices); 

// const num = Number('23');

// console.log(num);



//example of function - cj

function printName() {
    console.log("My name is Swapna");
}

printName();


function printName1(name) {
    console.log("My name is " + name);
}

printName1('swapna');


//self invoking function

(function selfInvoke() {
    console.log("This is self invoke function");
}) ();

(function firstName(name){
    console.log("I am amazing " + name);
})('tests'); 

// functions without name is called anonymous function

const calcAge1 = function (birthYear) {
    return 2036 - birthYear;
}


// functio inside another function

function add(a , b) {
    return a + b;
}

function sub(a , b) {
    return a - b;
}

function printAddSub (a , b) {
    console.log(`${a} + ${b} = ${add(a, b)}`);
    console.log(`${a} - ${b} = ${sub(a , b)}`);
}


printAddSub(5, 3);

//arrow function

const arrowAdd = (a , b) => a + b;

console.log(arrowAdd(2, 4));


//arrow function with more than 1 statement in body

const arrowPrintAdd = (a, b) => {
    const sum = add(a, b);
    return sum;
}

console.log(arrowPrintAdd(2, 5));