/**
 * Have the function MultiplicativePersistence(num) take the num parameter being passed 
 * which will always be a positive integer and return its multiplicative persistence which
 *  is the number of times you must multiply the digits in num until you reach a single digit.
 *  For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 
 * and finally 1 * 4 = 4 and you stop at 4.
 */

 function MathChallenge(num) { 
  
    let count = 0
    let n = num+''
    
    while(n.length > 1){
      let x = multiPersis(parseInt(n))
      n = x+''
      count++
    }
  
  
  
    return count; 
  
  }
     
  const multiPersis = (num) => {
    let n = num +''
    let mul = 1
    for(let i= 0 ; i<n.length ; i++){
      mul *= parseInt(n[i])
    }
    return mul
  }
  
  // keep this function call here 
  console.log(MathChallenge(readline()));