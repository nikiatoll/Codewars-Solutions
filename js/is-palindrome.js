//params - a string (case sensitive) can be empty
//return - true if it is a palindrome, false otherwise
//example - isPalindrome("aa") => true
//pseudo - reverse the argument, and check if its strictly equal to the argument

function isPalindrome(x) {
    return x.toLowerCase().split('').reverse().join('') === x.toLowerCase()
}

console.log(isPalindrome('Abba'))