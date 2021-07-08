//let is used to create new variable
let country ="India"; //values is declared by variable
let continent = "Asia";
let population = 231000000;

console.log("Country is" + country);

// + operartor has 2 functions
// when 2 numbers are given, performs addition eg: 2+3 = 5
// when 2 string data is given, performs concatenation eg: "2"+"3" = 23

console.log(population);
console.log(continent);


const isIsland = 'false'; //variable holds Boolean value
console.log(isIsland);
console.log( typeof isIsland);
console.log(typeof population);
console.log(typeof country);

let language ;// variable doesnot holds any values i.e; undefined
console.log(typeof language);
console.log(language);

language = "telugu";

//BasicOperators

let halfPopulation = population/2;
console.log("each half population for individual country " + halfPopulation);
 population = population+1;

 population++;
 console.log(population);

let finland = 6000000;
if(population > finland){
    console.log("true my country population is greater than finland");
}
let averagePopulation = 3000000;
if(population < averagePopulation){
    console.log("true my country population is less than averagepopulation");
}
let description = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);

description = `Portugal is in Europe, and its ${averagePopulation} people speak portuguese`;

console.log(description);