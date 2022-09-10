//params: take a string of any characters 
//return: a string that consists of "(" for characters that dont appar again in the string, and ")" for charaacters that do appear again.
//example: duplicateEncode("amazing") => ")()(((("
//pseudo : we loop through the string, at each letter check a hash map, if the value(char) doesnt exist, make it with the "(" value, if it does exist and its value is "(", replace its value with ")" otherwise go to the next letter if there is one.once you go through the whole input string, populate a new string using the old string chars as keys and concatenating the key value.return the new string.
//although, to use array functions we loop through the string, at each letter we slice out the rest of the word and see if it includes the letter we just got to. if it does, replace the letter with a ")" otherwise, replace it with "("

function duplicateEncode(word) {
    let solution = ""
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word.i) === word.lastIndexOf(word.i)) solution = solution + "("
        else solution = solution + ")"
    }
    return solution
}