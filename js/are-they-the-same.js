//P: params -> 2 arrays, non zero in length, may be null
//R: return : if contents of b are squares of contents in a, unordered, return true, otherwise return false.
//E:comp([1,2,3], [1,4,9]) => true
//P: make hashmap, b roots keys, a elements add to counter in matching key. if any keys have 0 matches, return false

function comp(a, b) {
    // let freqMap = new Map()
    
    return !!a && !!b && a.map(x => x * x).sort().join() == b.sort().join();

    // array2.forEach(bigNum =>{
    //     const squareNum = Math.sqrt(bigNum)
    //     if(!freqMap.has(squareNum)){
    //         freqMap.set(squareNum,0)
    //     }
    // })
    // array1.forEach(smallNum =>{
    //     if(freqMap.has(smallNum)){
    //         freqMap.set(smallNum, freqMap.get(smallNum)+1)
    //     } else{
    //         hasAll = false
    //     }
    // })
    
    // for(let x of freqMap.values()){
    //     if(!(x>0)){
    //         return false
    //     }
    // }
    // return hasAll
}

console.log(comp([3, 8, 5, 2, 2, 2, 1, 2, 5, 0, 1, 1, 4, 4, 1, 3, 10, 5] ,[9, 25, 1, 9, 1, 100, 4, 1, 0, 16, 4, 1, 25, 25, 4, 64, 16, 4]))