// Print a Square

// Write a function printSquare which is given a size and prints a square of that size using asterisks.
const printSquare = function (num){
  for(let i = 0 ; i < num; i++){
    
    let brick = `-`;
    
    
    brick = brick.repeat(num);
    console.log(brick);

  };

};

printSquare(5);
// -----
// -----
// -----
// -----
// -----