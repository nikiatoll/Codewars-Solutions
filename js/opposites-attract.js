// P: params: will always pass two unsigned ints, may be 0
// R: return true if one number is odd and other is even, false otherwse
// E: lovefunc(2,4)=> false, lovefunc(2,3)=> true
// P: check if both numbers are %2==0. if bool vals differ, return true, otherwise return false

function lovefunc(flower1, flower2) {
    return (flower1%2===0) != (flower2%2===0)
}