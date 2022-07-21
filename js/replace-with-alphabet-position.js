//p arams- a string, may be empty
//r eturn- a string of numbers replacing every letter with its position in the alphabet. ignore non letters
//e xample- alphabetPosioint('abc !@#')=> '1 2 3'
//p seudo code- we want to create a new string and add to it every time we have a letter. we can use the letter codes since the alphabet codes are sequential, and normalize the letters by making them lowercase, and going letter by letter, concatenating their place in the alphabet order into a new string.

function alphabetPosition(text) {
    let result = ''
    let tempText = text.toLowerCase()
    for (let i = 0; i < text.length; i++) {
        if (tempText[i].charCodeAt() > 96 && tempText[i].charCodeAt() < 123) {
            result = result.concat(tempText[i].charCodeAt() - 96, ' ')
        }
    }
    return result.trimEnd()
}