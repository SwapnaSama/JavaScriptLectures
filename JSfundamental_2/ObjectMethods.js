const raki = { 
    firstName: 'swarupa', 
    lastName: 'sama', 
    age:2021 - 1960, 
    job: 'artist', //String
    friends:['raki', 'janu', 'raji'], //Array
    hasDriverLicense: true, //boolean 

    // calcAge: function (birthYear){
        // return 2037 - birthYear; //function 
    
    calcAge: function (){
        console.log(this); //this keyword
       return 2037 - this.birthYear;   //using this keyword

    }
};

// console.log(raki.calcAge(1960)); //dot notation
// console.log(raki['calcAge'](1960)); //bracket notation

//cj example object method

// this keyword points to the property key with in the object

// function within the object is called objectMethods
const car = {
    name: 'Fortuner',
    company: 'Ford',
    price: 2000,
    tax: 0.15,
    sellingPrice: function () {
        const sp =(this.price * this.tax) + this.price;
        return sp;
    }
}

//anonymous fn is used in function expression and object methods

console.log(car.sellingPrice());



