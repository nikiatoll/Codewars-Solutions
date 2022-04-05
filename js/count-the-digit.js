function nbDig(n, d) {
    let numArray = []
    let answer = 0
    for (let i = 0; i <= n; i++) {
        numArray.push(i ** 2)
    }
    numArray.forEach((n)=>{
        do {
            if(n%10===d){
                answer++
            } 
            n = Math.floor(n / 10)
        } while(n)
    })
    return answer
}

console.log(nbDig(10,1))

//     const ans=numArray.reduce((lastVal, currentVal)=> {
//         let hold = 1
//         if(hold){
//             hold = Math.floor(currentVal/10)
            
//         }
//         const digits = [currentVal%10].concat(lastVal)

//     },0)
//     const splitNum = (n, res = []) => {
//         if (n) {
//             return splitNum(Math.floor(n / 10), [n % 10].concat(res));
//         };
//         return res;
//     };
//     const splitDigit = (arr) => {
//         return arr.reduce((acc, val) => acc.concat(splitNum(val)), []);
//     };
//     return((numArray))
// }