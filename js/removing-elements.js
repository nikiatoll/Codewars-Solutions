//P: params - an array of elemnts, will never be empty, will only be strings
//R: return a modified array that contains the elements in even slots (every second element is removed)
//E: removeEveryOther(["keep", "remove", "keep"]) => ["keep", "keep"]
//P: filter out elements that are in odd number indexes, return array

function removeEveryOther(arr) {
    return arr.filter((x, i) => i%2==0)
}