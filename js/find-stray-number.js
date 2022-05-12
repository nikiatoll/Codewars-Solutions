// P: numbers only? yes. only odd length? yes. need to check for invalid inputs? no
// R: return or console.log? return
// E: stray([1, 2, 1, 1, 1]) ==> 1
//stray([5, 6, 5]) ==> 5
// P: sort the numbers
//    compare first and last with number in the middle (conditional)
//    return non matching number


function stray(numbers) {
    numbers.sort((a,b)=> a-b);
    if(numbers[0]===numbers[1]){return numbers[numbers.length-1]}
    return numbers[0]
}

