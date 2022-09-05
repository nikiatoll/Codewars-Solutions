//p-arams a single string of random length, may be empty, any character
//r-eturn (imagine the string runs along the top of a mountain range. some characters are at the tops, and the tops get one higher for each prior top) of the tops of the string, return a string with the chars at the tops from highest to lowest
//e-xample tops(abcdefghijklmnopqrstuvwxyz1234) => 3pgb
//p-seudo start with char at index 1, then count 4 spaces away, store index 5, continue to skip, adding 4 to the amount skipped each time. stop when you reach the end of the string, then return the stored chars in reverse order

function tops(msg) {
    let solution = []
    let counter = 0
    for (let index = 1; index < msg.length; index+=1+counter) {
        counter+=4
        solution.push(msg[index])
    }
    return solution.reverse().join('')
}
console.log(tops('abcdefghijklmnopqrstuvwxyz1234'))