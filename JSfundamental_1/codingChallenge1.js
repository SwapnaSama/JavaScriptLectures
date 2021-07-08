 const markMass = 78;
 const markHeight = 1.69;
 const johnMass = 92;
 const johnHeight = 1.95; // step1

const  markBMI = markMass/ (markHeight * markHeight);
console.log("MARKS BMI is " + markBMI );

const johnBMI = johnMass/ (johnHeight * johnHeight);
console.log("john BMI is " + johnBMI ); //step2

let markHigherBMI = true;
if (markBMI < johnBMI){
    markHigherBMI = false;
} //step3 

if (markBMI < johnBMI){
    console.log( "john's BMI is higher than mark's BMI");
}else {
    console.log( "mark's BMI is higher than john's BMI");
}

