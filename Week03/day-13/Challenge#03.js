/**
 * Fibonacci Checker
    Have the function FibonacciChecker(num) return the string yes if the number given is
    part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which 
    means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, 
    then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.
 */

    function MathChallenge(num) { 

        let n1=0, n2=1, next=n1+n2
        let fabArr = [0, 1]
        for(let i=0 ; i<num ; i++){
          n1 = n2
          n2 = next
          next = n1+n2
      
          fabArr.push(n1)
          fabArr.push(n2)
      
          if(fabArr.includes(num))
            return 'yes'
      
        }
      
        // code goes here  
        return 'no'; 
      
      }
         
      // keep this function call here 
      console.log(MathChallenge(readline()));