/**
 * 
 * Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.
 */

 function StringChallenge(str) { 

    let temp1 = str.split('').filter((itm) => itm != ' ').join('')
    let temp2 = str.split('').filter((itm) => itm != ' ').reverse().join('')
    
    // code goes here  
    return temp1 == temp2; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));