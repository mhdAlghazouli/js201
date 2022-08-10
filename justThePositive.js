// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.
function positiveNumbers(array){

  return array.filter(element => {
    return element >= 0;
  });

};



console.log(positiveNumbers([1, -3, 5, -3, 0]));
// [1, 5, 0]
console.log(positiveNumbers([1, 2, 3]));
// [1, 2, 3]
console.log(positiveNumbers([-1, -2, -3]));
// []