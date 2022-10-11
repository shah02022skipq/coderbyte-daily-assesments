/**
 * Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.

Once your function is working, take the final output string and concatenate it with your ChallengeToken, and then replace every fourth character with an underscore.

Your ChallengeToken: 0ul8tvg63b5
 */

function StringChallenge(str) { 
  
    let out = ''
    for(let i=0 ; i<str.length ; i++){
      let ascii = str.charAt(i).charCodeAt(0)
      
      if(ascii >= 65 && ascii <= 90){
        let x = ascii - 65
        x += 97
        out += String.fromCharCode(x)
      }
      else if(ascii >= 97 && ascii <= 122){
        let x = ascii - 97
        x += 65
        out += String.fromCharCode(x)
      }
      else{
        out += str.charAt(i)
      }
  
    }
  
    let ct = '0ul8tvg63b5'
    out += ct
    let fnlOut = ''
    for(let i=0 ; i<out.length ; i++){
      if((i+1)%4==0){
        fnlOut += '_'
      }else{
        fnlOut += out.charAt(i)
      }
    }
  
    // code goes here  
    return fnlOut; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));