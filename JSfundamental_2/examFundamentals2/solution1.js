const numbers = [1, 2, 3];
const prodct = 2;
const computerProduct = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const product = prodct * numbers[i];
    console.log(numbers[i]);
  }
  console.log("product: " + product);
  return computerProduct;
};
const checkLimit = function (computerProduct) {
  while( i >= 20) {
    console.log( "true");
  } else{
    console.log("false");
  }

}
console.log(computerProduct(numbers));
