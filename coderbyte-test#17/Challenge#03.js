/**
 * Have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes out to be a prime number, otherwise return 0. For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes.
 */

 function MathChallenge(num) { 

    let str = num+''
    let permutations = strPermutations(str)
  
    for(let i=0 ; i<permutations.length ; i++){
      let x = parseInt(permutations[i])
      if(isPrime(x))
        return 1
    }
  
    // code goes here  
    return 0; 
  
  }
  
  const isPrime = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
    return num > 1;
  }
  
  const strPermutations = (str)=>{
    if(str.length <=2) return str.length ===2 ? [str, str[1] + str[0]] : [str] ;
    
    let tok = str.split('')
    return tok.reduce(
      (acc, letter, i) => 
      acc.concat(strPermutations(str.slice(0,i)+str.slice(i+1)).map(val => letter+val)),
      []
    )
  } 
  
  // keep this function call here 
  console.log(MathChallenge(readline()));