/**
 * Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
 */

 function ArrayChallenge(arr) { 

    let max = arr.sort((a, b) => b-a)[0]
    let sum=0
    let flag = false
    for(let i=1 ; i<arr.length ; i++){
      
      for(let j=1 ; j<arr.length ; j++){
        if(i!=j)
          sum += arr[j]
        if(sum == max){
          flag = true
          break
        }
          
      }
      sum = 0
        
    }
  
    // console.log(max)
  
    // code goes here  
    return flag ? 'true' : 'false'; 
  
  }
     
  // keep this function call here 
  console.log(ArrayChallenge(readline()));