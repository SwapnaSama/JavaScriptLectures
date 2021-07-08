 const hasDriversLicense = true; //A
 const hasGoodVision = false; //B

 console.log(hasDriversLicense && hasGoodVision); //AND Operator
 console.log(hasDriversLicense || hasGoodVision); //OR Operator
 console.log(!hasDriversLicense); // NOT Operator
 console.log(!hasGoodVision); //NOT Operator

 if(hasDriversLicense && hasGoodVision){
     console.log('raki is able to drive!');
 }else{
     console.log('someone else shoul drive');
 }

 const isTired = true; //C
 console.log(hasDriversLicense && hasGoodVision && isTired);

 if(hasDriversLicense && hasGoodVision && isTired){
    console.log('raki is able to drive!');
}else{
    console.log('someone else shoul drive');
}