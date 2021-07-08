const day = 1;
let isSunday = false;

if ( day === 1){
    isSunday = true;
}

if(isSunday == true) {
    console.log("Yay, today is sunday");
}
else {
    console.log("OOps, today is working day");
}

//implementation using ternary opertor

isSunday = day === 1 ? true : false;

if(isSunday == true) {
    console.log("Yay, today is sunday");
}
else {
    console.log("OOps, today is working day");
}
isSunday == true ? console.log("Yay, today is sunday") : console.log("OOps, today is working day");