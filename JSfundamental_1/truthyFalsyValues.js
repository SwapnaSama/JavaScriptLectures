// 5 falsy values: 0, '' (emtpy string) , undefined, null, NaN (Not a Number)

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// console.log(Boolean({})); //empty Object '{}'
// console.log(Boolean('Raki'));

const money = 0; //falsy value assgined to variable money
if( money) {
    console.log("Don't spend it all ;)");
}else{
    console.log(" you should get a job!");
}

const peny = 100; // truthy value assgined to variable peny
if (peny){
    console.log("think while spending");
}else {
    console.log("get a job asap");
}

let height; // here for variable height, didnot assign any value.
if (height){
    console.log('yay! height is defined');
}else {
    console.log('height is undefined');
}

let high = 0; // assigned value now also falsy value
if(high){
    console.log('high is now defined');
}else{
    console.log('high is a undefined');
}

