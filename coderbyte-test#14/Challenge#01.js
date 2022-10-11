/**
 * Have the function NumberAddition(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.
 */

 function SearchingChallenge(str) { 

    let sum = 0
    if(str.includes(' ')){
      let tokens = str.split(' ')
      
      for(let i= 0 ; i<tokens.length ; i++){
        let runStr = tokens[i]
        let num = '0'
        for(let j=0 ; j<runStr.length ; j++){
          if(isNumber(runStr.charAt(j))){
            num += runStr.charAt(j)
          }
        }
        let x = parseInt(num)
        sum += x
      }
  
      return sum
  
    }
    else{
      let x = '0'
      let y = '0'
      for(let i=0 ; i<str.length ; i++){
        if(isNumber(str.charAt(i))){
          if(i==str.length-1)
            y += str.charAt(i)
          else
            x += str.charAt(i)
        }
      }
  
      x = parseInt(x)
      y = parseInt(y)
  
      return x+y
    }
      
  
  
    // return sum; 
  
  }
  
  const isNumber = (char)=>{
    let ascii = char.charCodeAt(0)
    if(ascii >= 48 && ascii <= 57)
      return true
    else
      return false
  }
     
  // keep this function call here 
  console.log(SearchingChallenge(readline()));