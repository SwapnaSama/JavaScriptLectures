const rakiArray = ['sama', 'swarupa', 2021 - 1960, 'amazing', false, ['raki', 'janu', 'raji']];

const raki = { 
    firstName: 'swarupa', 
    lastName: 'sama', 
    age:2021 - 1960, 
    job: 'artist', //string
    childrens:['raki', 'janu', 'raji'] // array
};

//cj

//array - also stores multiple values of different data, its structure differs from object
//object - it is a variable that can hold different type of values
//in other words, it is a representation of real world entity

//example of objectr

const student = {} //object literal

const employee = {
    id : 1,
    name: 'swapna',
    role: 'developer',
    pay: 90000,
    company: 'test',
    isActive: true
};

//struture is key value pair and called as properties of object

//object property should be accessed using key only  with dot or [] notation

console.log(employee.id);
console.log(employee['name']);
