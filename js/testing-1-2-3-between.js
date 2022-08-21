//params: an array of any length containing strings. strings may or may not be empty
//return: an array of strings, each element prepended by the correct number in sequence
//example: testing(["a","b","c"])-> ["1: a", "2: b", "3: c"]
//pseudo: run through each element, taking its contents and adding to a template literal that has n: format and increments n by one each element

var number = function (array) {
    return array.map((x, i) => `${i + 1}: ${x}`)
}