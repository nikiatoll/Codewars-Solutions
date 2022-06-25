//P: params- array of ints, positive or negative, including 0, always have valid response
//R: return the int that occurs an odd number of times, there will only be one
//E: findOdd([1,2,1,2,3,3,3])=> 3
//P: 

function findOdd(A) {
    const map = new Map()
    A.forEach(x=>{
        if (!map.has(x)){
            map.set(x, 1)
        } else {
            map.set(x, (map.get(x)+1))
        }
    })
    for (const [key, val] of map){
        if (val%2!==0) return key
    }
    return map;
}

console.log(findOdd([1, 2, 1, 2, 3, 3, 3]))