//params a string, may be empty, case insensitive, can contain any char
//return, a boolean, true if the number of x's and o's are the same, false otherwise
//example function(['xxoo']) => true
//pseudo - make argument lowercase, .match to get an array of the x's and o's seperate, compare length of arrays.

function XO(str) {
    str = str.toLowerCase()
    return str.split('x').length === str.split('o').length
}

console.log(XO('ox xxoOxo '))