let bill = 40;
let tip;
if ( bill >= 50 && bill <=300){
    tip = bill * (15/100);
    
}
else {
    tip = bill * (20/100);
}
console.log(`the bill was ${bill} , the tip was ${tip} and the total value was ${bill + tip }`);