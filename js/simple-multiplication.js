//P: will it always be a whole number? yes
//R: are we returning or printing? return
//E: simpleMultiplication(2)=> 16
//P: determine if it is even, conditional if even multiply by 8, else by 9

function simpleMultiplication(number) {
    return number%2===0? number*8:number*9
}
