/**
 * Have the function StringChallenge(sen) take the sen parameter being passed and return the longest 
 * word in the string. If there are two or more words that are the same length, return the first word 
 * from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also 
 * contain numbers, for example "Hello world123 567"
 * 
   Once your function is working, take the final output string and intersperse it character-by-character 
   with your ChallengeToken.
    Your ChallengeToken: x5wnzagr9f3
 */

function StringChallenge(sen) { 

    sen = sen.replace(/[^a-z0-9 - ]/gi, '')
    

    
    let tokens = sen.split(' ')
    let tokensLen = []
    for(let i=0 ; i<tokens.length ; i++){
        tokensLen.push(tokens[i].length)
    }
    
    tokensLen = tokensLen.sort((a,b)=> b-a)[0]
    let largeWord = ''
    for(let i=0 ; i<tokens.length ; i++){
        if(tokensLen == tokens[i].length){
        largeWord += tokens[i]
        break
        }
    }
    
    let ChallengToken = 'x5wnzagr9f3'
    let finalOutput=''
    let j=0
    for(j ; j<largeWord.length ; j++){
        finalOutput += largeWord[j]+ChallengToken.charAt(j)
    }
    finalOutput += ChallengToken.slice(j, ChallengToken.length)
    
    return finalOutput; 
    
}

//There we are calling the function and printing the results 
console.log(StringChallenge(readline()));