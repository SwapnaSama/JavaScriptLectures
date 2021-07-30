// Nullish coalescing works same way as OR Operator
// Nullish : Only for Null and undefined (NOT 0 OR ' ')

// or operator returns only the truthy values

const numGuests = 0;
const guests = numGuests || 10 || numGuests;
console.log(guests);

//falsy values - 0, null, undefined, ''

//Nullish: null and undefined (NOT 0 or ' ')
const guestCorrect = undefined ?? numGuests ?? 10;
console.log(guestCorrect);
// nullish coalesce working - if it finds undefined or null, it goes to next variable and prints out
