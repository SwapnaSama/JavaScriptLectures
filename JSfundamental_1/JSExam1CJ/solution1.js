let shoeName = 'adidas';
let shoePrice = 50;
let discount;
let newShoePrice;

discount = shoePrice * (30/100);
newShoePrice = (shoePrice - discount);
console.log(`The original price of shoe is ${shoePrice}$, after discount of 30%(${discount}$), the new price of the shoe is ${newShoePrice}$`);
