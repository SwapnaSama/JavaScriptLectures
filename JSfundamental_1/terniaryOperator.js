const age = 28;
age >= 20 ? console.log('I like to eat cheerys') :
console.log('I like to drink wine'); // terniaryOperator 

const drink = age >= 18 ? 'cherryjuice' : 'wine';
console.log(drink);

let drink2;
if (age >= 30){
    drink2 = 'cherryjuice';
}else {
    drink2 = 'wine';
} console.log(drink2);

console.log(`I like to drink ${age >= 25 ? 'cherryjuice' : 'wine'}`); // terniary Operator