/**
 * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

Once your function is working, take the final output string and concatenate it with your ChallengeToken, and then replace every fourth character with an underscore.

Your ChallengeToken: boh2rwgztc1
 */

function StringChallenge(str) { 

    let i=0
    let res = ''
    let tokens = str.split(' ')
    for(i ; i<tokens.length ; i++){
      let temp = tokens[i].charAt(0).toUpperCase()
      
      if(i != tokens.length-1)
        res += temp + tokens[i].slice(1, tokens[i].length)+' '
      else
        res += temp + tokens[i].slice(1, tokens[i].length)
    }
    
    res += 'boh2rwgztc1'
    let j=1
    str = ''
    for(i=0 ; i<res.length ; i++){
      if(j==4){
        str += '_'
        j=1
      }else{
        str += res.charAt(i)
        j++
      }
    }
  
    return str; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));