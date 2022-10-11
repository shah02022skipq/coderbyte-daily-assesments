/**
 * Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.
 */

 function ArrayChallenge(arr) { 

    let initArth = arr[1] - arr[0]
    let art = false
  
    let initGeo = arr[1]/arr[0]
    let geo = false
  
    for(let i=1 ; i<arr.length-1 ; i++){
      let tmp = arr[i+1]-arr[i]
      if(tmp == initArth)
        art = true
      else{      
        art = false
        break;
      }
    }
  
    for(let i=1 ; i<arr.length-1 ; i++){
      let tmp = arr[i+1]/arr[i]
      if(tmp == initGeo)
        geo = true
      else{
        geo = false
        break;
      }
        
    }
  
    if(geo == true)
      return "Geometric"
    else if(art == true)
      return "Arithmetic"
    else
      return -1; 
  
  }
     
  // keep this function call here 
  console.log(ArrayChallenge(readline()));