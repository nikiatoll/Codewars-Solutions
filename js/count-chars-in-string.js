//Params - a string, may be empty
//r- an object with individual characters as keys and the number of times it occurs as values
//example - count("abdbd") => {'a':1, 'b':2, 'd': 2}
//pseudo - create a hashmap that counts up character occurences

function count(string) {
    let map = {};
    string.split('').forEach(x => {
        if (x !== ' ') {
            if (map[x] > 0) { map[x]++ }
            else { map[x] = 1 }
        }
    })
    return map;
}