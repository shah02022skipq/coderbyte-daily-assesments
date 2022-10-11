/**
 * Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
 */

 function MathChallenge(num) { 
    let x = num+''
    let count = 0
    while(x.length > 1){
      let i = parseInt(x)
  
      x = addPersis(i)+''  
      count++
    }
  
   
  
    return count; 
  
  }
     
  const addPersis = (num) => {
    let x = num+""
    let s = 0
    for(let i= 0 ; i<x.length ; i++){
      let a = parseInt(x.charAt(i))
      s += a
    }
  
    return s
  }
  
  // keep this function call here 
  console.log(MathChallenge(readline()));