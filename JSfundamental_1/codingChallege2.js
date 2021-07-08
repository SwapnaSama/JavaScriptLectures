const markMass = 78;
 const markHeight = 1.69;
 const johnMass = 92;
 const johnHeight = 1.95; 


const  markBMI = markMass/ (markHeight * markHeight);

const johnBMI = johnMass/ (johnHeight * johnHeight);

if (markBMI < johnBMI){
    console.log(`john's BMI (${johnBMI}) is higher than mark's BMI (${markBMI})`);
}else {
    console.log( `mark's BMI (${markBMI}) is higher than john's BMI(${johnBMI})`);
} //step1

