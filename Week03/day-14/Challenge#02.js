/**
 * Have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within it. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters.
 */

 function ArrayChallenge(strArr) { 

    let map = new Map()
    for(let i=0 ; i<strArr.length ; i++){
      map.set(strArr[i], strArr[i].length)
    }
    
    let mapArr = new Map([...map].sort((a, b) => b[1]-a[1]))
    let res = [...mapArr.values()][2]
  
    let word = [...mapArr.keys()][2]
    for(let i=3 ; i<mapArr.length ; i++){
      if([...mapArr.values()][i] == res)
        word = [...mapArr.keys()][i]
    }
  
  
    return word; 
  
  }
     
  // keep this function call here 
  console.log(ArrayChallenge(readline()));