//params - a string with letters and numbers and the # sign. may be empty
//r-eturn - return a string that treats the # like a backspace, multiple # backspacing the next letter
//e-xample - cleanString("abc##")=> "a"
//pseudo - make a new variable, adding letters one by one, if you find a # sign, pop off the last letter in the new string.

function cleanString(s) {
    let output = []
    s.forEach(x=> {
        x=="#"? output.pop():output.push(x)
    })
    return output.join('')
}