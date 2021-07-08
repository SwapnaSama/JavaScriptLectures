 //inside curli braces is functions body

// function declaration // declaraing function
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1995); //invoking / calling a function
console.log(age1); 

//function experssion 
const calcage2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcage2(1995); // calling function

console.log(age1, age2);
