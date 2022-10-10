//p parameter is a string (message in text)
//r return what you would see if that message was read from a mirro, including the frame of the mirror.
//emirrot('Hello World') => ********* 
                        //  * olleH *
                        //  * dlroW *
                        //  *********
//p find the length of the longest word, make the top row of the fram 4 more characters long. begin and end each word with '* ' and ' *' add bottom frame.

function mirror(text){
    let wordArray= text.split(' ')
    let longestWordLength = wordArray[0].length
    let frameTop = ''
    let output = ''
    
    wordArray.forEach((x) => {
        if (longestWordLength < x.length) longestWordLength = x.length
    })

    for (let index = 0; index < longestWordLength+3; index++) {
        frameTop+='*'
    }
    output = frameTop + '*\n*'

    for (let i = 0; i < wordArray.length; i++) {
        output += ' '+ wordArray[i].split('').reverse().join('')
        let wordLength = wordArray[i].length
        while (wordLength < longestWordLength) {
            if (wordArray[i].length < longestWordLength) {
                output += ' '
            }
            wordLength++
        }    
        output += ' *\n*'
    }
    output += frameTop
    return output
}
