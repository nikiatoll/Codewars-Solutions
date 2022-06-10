//params- a string that contains a number. will always only be valid numbers and wont be empty
//r return - the string in the type of number
//e xample stringToNumber("22") => 22
//peudo - return the parsedInt of the string

const stringToNumber = function (str) {
    return Number.parseInt(str)
}