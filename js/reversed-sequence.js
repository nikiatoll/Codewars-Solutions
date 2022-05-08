// P: will it always be a whole positive number? yes
// R: are we printing numbers or an array of numbers? array. print or return? return
// E: reverseSeq(5)=> [5, 4, 3, 2, 1]
// P: loop: add number to array, subtract one, repeat until number is 0

const reverseSeq = n => {
    let seq = []
    while(n>0){
        seq.push(n);
        n--
    }
    return seq
};