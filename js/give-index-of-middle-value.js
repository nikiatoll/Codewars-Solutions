//P parameters will always be an array of three distinct numbers
//R return the index of the number that is between the other two numbers in value
//E example fn([1,0,3])=> 0
//P using math . min and math.max, find the numbers at either end, then return the index of the number that is not those tow numbers

function gimme(array) {
    const max = Math.max(...array)
    const min = Math.min(...array)
    for (let i = 0; i < array.length; i++) {
        if (array[i]>min && array[i]<max) return i
    } 
}

function gimmeMore(array) {
    const  newArray = [...array].sort(function ascendingSort(a,b){return a-b});
    const middleValue = newArray[(newArray.length-1)/2];
    console.log(middleValue);
    console.log(array);
    return array.indexOf(middleValue);
}

console.log(gimmeMore([5, 10, 14,20, 2]))
console.log(gimme([2,3,1]))
