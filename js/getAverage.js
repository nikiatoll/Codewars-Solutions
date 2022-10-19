//will always recieve an array of whole, positive numbers (at least 1 element)
//will always return as a number, the average score of the input array, rounded down to the nearest whole integer.
//getAverage([2,2,2,2],2) //(2,2)
//getAverage([1,2,3,4,5],3) //(3,3)
//getAverage([1,1,1,1,1,1,1,2]),1)

//use reduce to add up all of the elements in the array and divide that by the length of the array.

// function calcAverage(arr){
//         return Math.floor(arr.reduce((accumulatorVal, currentVal) => accumulatorVal + currentVal, 0) /arr.length)
// }
const getAverage = arr => Math.floor( arr.reduce((a,c) => a+c) / arr.length)

console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]))