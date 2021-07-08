//arrow function

// this keyword does not work inside arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 -birthYear;
    const retirement = 65 -age;
   // return retirement;
   return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1994, 'raki'));
console.log(yearsUntilRetirement(1995, 'King')); 