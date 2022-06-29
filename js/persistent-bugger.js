//P: params will be positive ints only, one or more digits
//R: return number of times digits were multiplied before reraching zero
//E: persistence(567)=> 2 (5*6*7 = 210, 2*1*0=0)
//P: while length of given number is more than one, multiply all digits together and assign total to number, increment counter, repeat, return counter

function persistence(num) {
    var times = 0;
    num = num.toString();

    while (num.length > 1) {
        times++;
        num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    return times;
}