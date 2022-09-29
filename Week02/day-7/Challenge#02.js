/**
 * Have the function VowelCount(str) take the str string parameter being passed and return the
 *  number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). 
 * Do not count y as a vowel for this challenge.
 */

 function StringChallenge(str) { 

    let vowel = ['a', 'e', 'i', 'o', 'u']
    let countVowel=0
  
    for(let i=0 ; i<str.length ; i++){
      if(vowel.includes(str.charAt(i).toLowerCase())){
        countVowel ++
      }
    }
  
  
    // code goes here  
    return countVowel; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));