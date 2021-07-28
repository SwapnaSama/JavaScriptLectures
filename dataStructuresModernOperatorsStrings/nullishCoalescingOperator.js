// Nullish coalescing works same way as OR Operator
// Nullish : Only for Null and undefined (NOT 0 OR ' ')

numGuests = 0;
const guests = numGuests || 10;
console.log(guests);

//Nullish: null and undefined (NOT 0 or ' ')
const guestCorrect = numGuests ?? 10;
console.log(guestCorrect);
