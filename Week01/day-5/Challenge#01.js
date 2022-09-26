/**
 * Have the function SimpleSymbols(str) take the str parameter being passed and determine 
 * if it is an acceptable sequence by either returning the string true or false. The str 
 * parameter will be composed of + and = symbols with several characters between them 
 * (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by
 *  a + symbol. So the string to the left would be false. The string will not be empty 
 * and will have at least one letter.
 */

 function StringChallenge(str) { 

    let flag = false
    for(let i=0 ; i<str.length ; i++){
      let ch = str.charCodeAt(i)
      if( ch >= '97' && ch <= '122'){
        if(str.charAt(i-1) == '+' && str.charAt(i+1) == '+'){
          flag = true
        }else{
          return  false        
        }
  
      }
    }
      
    return flag; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));