/**
 * Have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false.
 */

 function MathChallenge(num) { 

    if(isPowerOfTwo(num))
      return 'true'
  
    // code goes here  
    return 'false'; 
  }
  
  const isPowerOfTwo = (x) => {
    if(x===0)
      return false
    
    return parseInt(Math.ceil((Math.log(x)/Math.log(2)))) == parseInt(Math.floor((Math.log(x)/Math.log(2))))
  }
  
     
  
  
  // keep this function call here 
  console.log(MathChallenge(readline()));