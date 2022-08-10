// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

const printBox = function (width,height) {

  for (let row = 1 ; row <= height ; row++){

    let rowString = "";

    for(let col = 1; col <= width; col++){

      if(row == 1 || row == height){

        rowString += `*`;
        
      } else {

        if(col == 1 || col == width){

          rowString += "*"

        } else {

          rowString += " ";

        };

      };

    };

    console.log(rowString);

  };

};


printBox(6, 4)
// ******
// *    *
// *    *
// ******