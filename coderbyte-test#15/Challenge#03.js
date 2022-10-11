/**
 * Have the function CountingMinutes(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.
 */

 function StringChallenge(str) { 

    let times = str.split('-')
    let t1 = times[0].split(':')
    let t2 = times[1].split(':')
  
    let h1 = parseInt(t1[0])
    let h2 = parseInt(t2[0])
  
    let tz1 = t1[1].substring(t1[1].length-2, t1[1].length)
    let tz2 = t2[1].substring(t2[1].length-2, t2[1].length)
  
    let m1 = parseInt(t1[1].substring(0, t1[1].length-2))
    let m2 = parseInt(t2[1].substring(0, t2[1].length-2))
    
    let x = Math.abs(h2-h1)
    if(x==0){
      if(tz1 == tz2){
        x = 24
      }else{
        x = 12
      }
  
      return (((x*60)-m1)+m2)
    }
    else{
      return (((x*60)-m1)+m2)
    }
  
  
    // code goes here  
    return str; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));