// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

const longLongVowels = function (str) {
  const vowels = "aeiou";
  let arr = str.split("");
  let newStr = [];

  for(let i = 0 ; i < arr.length; i++){
    if(arr[i] === arr[i + 1]){
      newStr.push(arr[i + 1].repeat(4));
    }else{
      newStr.push(arr[i])
    }
  }
  return newStr.join("");
  

}


console.log(longLongVowels('Good'))
// 'Goooood'
console.log(longLongVowels('Cheese'))
// // 'Cheeeeese'
console.log(longLongVowels('Man'))
// // 'Man'