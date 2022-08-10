function isVowel(letter) {
  // const vowel = `aeiou`;

  // if(vowel.includes(letter)){
  //   return true;
  // };
  // return false;

  switch(letter) {
    case `a` :
      return true;
      break;
    
    case `e` :
      return true;
      break;

    case `i` :
      return true;
      break;

    case `o` :
      return true;
      break;

    case `u` :
      return true;
      break;

    default :
    return false;
  };

};

console.log(isVowel("a")) // true  
console.log(isVowel("c")) // false
console.log(isVowel("e")) // true