//P: params are [positive integers, may or may not be perfect squares
//R: return -1 if number is not a perfect square, if it is, return the next number that is a perfect square
//E: 121 --> 144, 625 -- > 676, 114 -- > -1 since 114 is not a perfect square
//P:if square root of parameter is not an integer, return negative one, else, add one to the square root and return that number squared.

function findNextSquare(sq) {
    if(!isInteger(sqrt(sq))) return -1;
    else return (Math.pow(sqrt(sq)+1, 2))
}