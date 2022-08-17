//P: arams- an array of numbers whole and unsigned, length of >0
//R: eturn the sum of the squares of the numbers
//E: squareSum([1,2,2])=>9
//P: use a reduce function to square each element and add the square to the total accumulator

function squareSum(nums){
    return nums.reduce((acc, x)=> acc+= x**2, 0)
}
