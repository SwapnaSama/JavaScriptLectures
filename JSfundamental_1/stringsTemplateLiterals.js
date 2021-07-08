const firstName = 'Raki';
const job = 'serviceNow dev';
const birthyear = 1994;
const year = 2021;

const Raki = " I'm " + firstName + ', a ' + (year - birthyear) + ' year old ' + job + '!';
console.log(Raki); // strings concatenation

const rakiNew = `I'm ${firstName}, a ${year - birthyear} year old ${job}!`; // template literals
console.log(rakiNew);

console.log(`just a regular string....`); //  template literals

console.log('strings \n\
multiple\n\
lines');

console.log(`srring with
multiple 
lines`); // template literals
