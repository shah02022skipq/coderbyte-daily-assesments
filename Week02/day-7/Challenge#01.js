/**
 * Have the function ABCheck(str) take the str parameter being passed and return the string true
 *  if the characters a and b are separated by exactly 3 places anywhere in the string at least once
 *  (ie. "lane borrowed" would result in true because there is exactly three characters between a and
 *  b). Otherwise return the string false.
 */

 function StringChallenge(str) { 

    let flag = false
    for(let i=0 ; i<str.length ; i++){
      if(str.charAt(i).toLowerCase() == 'a'){
        i += 4
        if(str.indexOf(str.charAt(i) != -1)){
          if(str.charAt(i) == 'b')
            return true
          else{
            i -= 4
          }
        }
      }
      else if(str.charAt(i).toLowerCase() == 'b'){
        i += 4
        if(str.indexOf(str.charAt(i) != -1)){
          if(str.charAt(i) == 'a')
            return true
          else{
            i -= 4
          }
        }
      }
  
    }
  
  
    // code goes here  
    return flag; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));