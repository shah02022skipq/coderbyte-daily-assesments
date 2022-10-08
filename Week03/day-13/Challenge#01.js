/**
 * Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

Once your function is working, take the final output string and concatenate it with your ChallengeToken, and then replace every fourth character with an underscore.

Your ChallengeToken: 0ul8tvg63b5
 */

function StringChallenge(str) { 
  
    let left = 0
    let right = 1
    let out = str.charAt(left)
  
    while(right < str.length){
  
      let lft = parseInt(str.charAt(left))
      let rgt = parseInt(str.charAt(right))
      
      if(!(lft%2==0) && !(rgt%2==0)){
        out += "-" + str.charAt(right)
      }else{
        out += str.charAt(right)
      }
  
      left++
      right++
    }
  
    let ct = "0ul8tvg63b5"
    out += ct
    let fnlOut=''
    for(let i= 0 ; i<out.length ; i++){    
      if((i+1)%4 == 0){
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