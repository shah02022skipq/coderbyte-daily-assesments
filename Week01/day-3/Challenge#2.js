/**
 * Have the function LetterChanges(str) take the str parameter being passed and modify it using the following 
 * algorithm. Replace every letter in the string with the letter following it in the 
 * alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) 
 * and finally return this modified string.

   Once your function is working, take the final output string and intersperse it character-by-character 
   with your ChallengeToken.
    Your ChallengeToken: x5wnzagr9f3
 */

function StringChallenge(str) { 


  
    let temp = ''
    for(let i=0 ; i<str.length ; i++){
      // console.log('str(i) = ', str.charAt(i))
      if(str.charAt(i).charCodeAt(0) >= 97 && str.charAt(i).charCodeAt(0) <= 122){
        // console.log(str.charAt(i))
        if(str.charAt(i).charCodeAt(0) == 122){
          let ch = String.fromCharCode(97+1)
          if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
            temp += ch.toUpperCase()
          else
            temp += ch
        }else{
          
          let ch = String.fromCharCode(str.charAt(i).charCodeAt(0)+1)
          if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
            temp += ch.toUpperCase()
          else
            temp += ch
        }
      }else{
        // console.log('na')
        temp += str.charAt(i)
      }
    }
  
    let chalTok = 'x5wnzagr9f3'
    let finalOutput = ''
    let j=0
    for(j ; j<temp.length ; j++){
      finalOutput += temp.charAt(j)+chalTok.charAt(j)
    }
  
    finalOutput += chalTok.slice(j, chalTok.length)
  
    return finalOutput; 
  
  }
     
  console.log(StringChallenge(readline()));