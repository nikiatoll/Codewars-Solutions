//no funny business, params only contain vaid symbols
//  just return the integer 
// convert('LVIII') => 58
// convert('XVII') => 17
// make an object that stores the symbols and values. split input into an array, use reduce, if the next number in the array is equal or less than the current number, add it to the total. otherwise, either subtract the current number twice or subtract current # from next # and add normally.
//reduce

function romanToInt(s){
    let code = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let output = s
        .split('')
        .map((x) => code[x])
        .reduce((a,b,i,nums)=> {
            if ((i===nums.length-1) || (nums[i]>=nums[i+1])){
                return a+b;
            } else {
                return a-b;
            }
        }, 0);
    return output
}

console.log(romanToInt("XVII"), 17)
console.log(romanToInt("XIV"), 14)
console.log(romanToInt("MCMXCIV"), 1994)