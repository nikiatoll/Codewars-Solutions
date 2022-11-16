function sortArray(arr) {
    const oddNumArray = arr.filter(x=> x%2).sort((a,b)=> b-a)
    
    return arr.map(x=> x%2===0 ? x : oddNumArray.pop())
}

console.log(sortArray([7,1]),[1,7])
console.log(sortArray([5,8,6,3,4]),[3,8,6,5,4])
