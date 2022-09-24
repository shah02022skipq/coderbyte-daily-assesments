/**
 * Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.

Once your function is working, take the final output string and concatenate it with your ChallengeToken, and then replace every fourth character with an underscore.

Your ChallengeToken: boh2rwgztc1
 */

function MathChallenge(num) { 

    let sum=0
    let i=1
    for(i ; i<=num ; i++){
      sum += i ; 
    }
  
    let str = sum+"boh2rwgztc1"
    let j=1  
    let res = ''
    i=0
    for(i ; i< str.length ; i++){
      if(j==4){
        res += '_'
        j=1
      }else{
        res += str.charAt(i)
        j++
      }
      
    }
  
  
    return res; 
  }
     
  // keep this function call here 
  console.log(MathChallenge(readline()));