// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.
const printBanner = function (bannerText) {
  
  for (let row = 0 ; row < 3; row++){
    let newRow = "";
    if(row == 0 || row == 2) {
      newRow += `-`.repeat(bannerText.length + 4);
    }else {
      newRow += `- ${bannerText} -`
    };

    console.log(newRow)
  };

};

printBanner('Welcome to DigitalCrafts');
printBanner('I Love JS');
// ----------------------------
// - Welcome to DigitalCrafts -
// ----------------------------