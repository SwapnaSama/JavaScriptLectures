//addition //math operators
const sum =2+3;
console.log(sum);

console.log(5/4); //prints actual divided value
console.log(7%4); //prints reminder

const firstName = 'raki';
const lastName = 'sama';
console.log(firstName + ' ' + lastName);
console.log("raki");
//Assignment operators
let x=3+9; //x=12
x+= 5; //x=x+5
x*=3; //x=x*3
x++; //x=x+1
x--;//x=x-1
console.log(x);

//comparsion operators
const ageRaki =26;
const ageJanu =32;
console.log(ageRaki < ageJanu);
console.log(ageRaki>=30);

const isFullAge = ageRaki<=30;
console.log(isFullAge);

// logical opertaor
// and - &&
if(3 == 3 && "try" == "try" && 2 == 3) {
    console.log("hurray");
}

// or - ||

if(3==3 || "try" == "tr") {
    console.log("or works");
}

// not operator
let boo = true;

if(!boo) {
    console.log("false");
}

let val = undefined;

if(!val) {
    console.log("value is undefined");
}
