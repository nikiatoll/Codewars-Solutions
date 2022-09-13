//P: two arrays of strings
//R: return the sorted array in lexographical order
//E: inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])
//P: start with the first element of the first array, then check if it is in any of the elements of the second array, if true add it and move on, if false move on.


function inArray(array1, array2) {
    return array1.filter(x => {
        for (let i = 0; i < array2.length; i++) {
            if (array2[i].includes(x)) return true
        }
    }).sort()
}