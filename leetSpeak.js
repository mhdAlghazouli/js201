// Write a function leetSpeak which is given a string, and returns the leetSpeak equivalent of the string. To convert text to its leetSpeak version, make the following substitutions:

const leetSpeak = function (word) {
  let newWord = "";

  for(let i = 0 ; i < word.length; i++){

    if(word[i] == 'a'){
      newWord += `4`
    }else if(word[i] == `e`){
      newWord += `3`
    }else if(word[i] == `t`){
      newWord += `7`
    }else if(word[i] == `g`){
      newWord += `6`
    }else if(word[i] == `i`){
      newWord += `1`
    }else if(word[i] == `o`){
      newWord += `0`
    }else if(word[i] == `s`){
      newWord += `5`
    }else {
      newWord += word[i]
    };

  };

    console.log(newWord.toLowerCase());

};

leetSpeak('Leet globis')
// l337