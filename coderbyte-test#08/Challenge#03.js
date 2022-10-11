
/**
 *  Have the function MaxSubarray(arr) take the array of numbers stored in arr and determine the
 *  largest sum that can be formed by any contiguous subarray in the array. For example,
 *  if arr is [-2, 5, -1, 7, -3] then your program should return 11 because the sum 
 *  is formed by the subarray [5, -1, 7]. Adding any element before or 
 *  after this subarray would make the sum smaller.
 */

 function ArrayChallenge(arr) { 

    let maxSum = -Infinity
    let runningSum = 0
    let start = 0
    let end = 0
  
    for(end ; end<arr.length ; end++){
      runningSum += arr[end]
  
      if(runningSum > maxSum){
        maxSum = Math.max(runningSum, maxSum)
        
      }
      if(runningSum < 0)
        runningSum = 0
  
    }
  
  
  
  
    // code goes here  
    return maxSum; 
  
  }
     
  // keep this function call here 
  console.log(ArrayChallenge(readline()));