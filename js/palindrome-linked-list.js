//input is an array, only numbers 0-9
//output boolean, weather or not list is a palindrome (last element matches first, second to last matches second, so on.) returned
//isPalindrome([1,2,2,1]) => true
//isPalindrome([1,2]) => false
//isPalindrome([1,2,1]) => true
//.reverse(), for loop, is array[i] === array[((array.length-1)-i)]

var isPalindrome = function(head){
    let size = head.length-1
    for (let index = 0; index < head.length; index++) {
        if (head[i]===head[size-i]) {
            return false
        }
    }
    return true
}