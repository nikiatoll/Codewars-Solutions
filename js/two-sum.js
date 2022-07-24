//P:params - a list of numbers and a numerical target. list will always have 2 or more, will always contain a solution, unsigned
//R: return indexes in form of an array of elements that add up to the target number
//E: twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
//P: remove any numbers in the array that are larger than the target, then starting with the first number, subtract given element from the target number and search the array for that result. if one is found, return index of starting number and found number, else repeat with the next element. 

function twoSum(numbers, target) {
    for (i = 0; i < numbers.length; i++) {
        second = numbers.indexOf(target - numbers[i], i + 1);
        if (second > i) {
            return [i, second];
        }
    }
}