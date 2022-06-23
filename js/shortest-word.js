// string not empty, only word length, separated by space? dash? comma? any of these?
// return number, length of shortest string.
//fn("The quick brown fox") => 3
// turn into an array of strings, count number of letters in first word and compare each word, return the shortest string length
function findShort(s) {
    const words = s.split(" ")
    let numLetters = words[0].length 
    for (let i = 0; i<words.length; i++){
        if (numLetters>words[i].length){
            numLetters=words[i].length
        }
    }
    return numLetters
}

console.log(findShort("The quick brown fox"))