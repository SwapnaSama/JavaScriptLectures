const numbers = [1, 2, 3, 5];
const computeProduct = function (numbers) {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product = product * numbers[i];
  }
  return product;
};

const checkLimit = function(i) {
  if( i <= 20) {
    return true;
  } else {
    return false;
  }
}

const prodValue = computeProduct(numbers);
console.log(prodValue);
console.log(checkLimit(prodValue));

