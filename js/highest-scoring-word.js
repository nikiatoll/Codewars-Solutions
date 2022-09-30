//p: take a string of words/characters, all lowercase and always valid
//r: assign a score to each group of words, and return the word that has the highest score (a=1, b=2, c=3 ...)
//e high('man i need a taxi up to ubud') => 'taxi'
//p first, seperate string into array of words by spaces, loop through all elements to add up the score from each letter, compare total score of each word to placeholder for highest value, only replace if greater than, and store the index of that higher word. return that word with the index.

function high(x) {
    let spread = x.split(' ')
    let highScore = 0
    let highIndex = 0
    spread.forEach((x , index)=>{
        let score = 0
        for (let i=0; i<x.length; i++){
            score += (x.charCodeAt(i)-96)
        }
        if (score > highScore) {
            highScore = score
            highIndex = index
        }
    })
    return spread[highIndex]
}
