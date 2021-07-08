// function declaration : function that can be used before it's declared

 function calcAge(birthYear){
return 2037 - birthYear;
}

//function Expression : essentially function value stored in a variable

const calcAge1 = function (birthYear) {
    return 2036 - birthYear;
}

//Arrow function : great for a quick one line functions.Has no this keyword(more later...)

const calcAge = birthYear => 2037 - birthYear;

//Anatomy of a function
// example : function function_Name( parameters){ function body and return statement }
// then calling a function using ()
// Parameters: placeholders to receive input values, like local variables of a function
// function body: block of code that we want to reuse. Processes the function's input data.
// return statement to Output a value from the function and terminate execution.
// calling, running or invoking the function, using () parenthesis

function calcAge(birthYear, firstName) {
    const age = 2037 -birthYear;
    console.log(`${firstName} is ${age} year old`);
    return age;
}
const age = calcAge(1994, 'raki'); // 1994 , raki are the arguments: actual values of function parameters, to input data