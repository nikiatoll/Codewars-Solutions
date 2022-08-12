//Params - array of whole numbers, signed and unsigned, array may be empty
//Return - the sum of all positive numbers in the array, skipping negatives
//Example - positiveSum([1,-4,7,12])=> 20
//Pseudo run reduce to add positive numbers, skipping negative numbers
function positiveSum(arr){
    return arr.reduce((acc, x)=> x>0? acc+=x: acc,0)
}