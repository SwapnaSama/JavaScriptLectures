// calling a function inside a function: data flow

const cutPieces = function (fruit){
 return fruit * 4;
};

const fruitProcessor = function (apples, oranges){

    const applesPieces = cutPieces(apples);
    const orangesPieces = cutPieces(oranges);
    const juice = `Juice with ${applesPieces} pieces of apples and ${orangesPieces} pieces of oranges.`; //using template literal
    return juice;
   } 

   console.log(fruitProcessor(3, 9));
