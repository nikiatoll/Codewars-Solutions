//p: given an array of integers, positive or negative
//r: arrange them in this order: smallest integer in the middle, next highest to the right, next highest to the left, repeating like a pendulum
//e: pendulum ([6, 6, 8 ,5 ,10]) ==> [10, 6, 5, 6, 8]
//p: first sort original array from least to greatest, then use .push and shift to populate a new array as you move through thee sorted original array.

function pendulum(values) {
    let pendulum = []
    values.sort((a,b) => {
        return a-b
    })
    .forEach((x,i)=> {
        i%2===0? pendulum.unshift(x) : pendulum.push(x)
    })
    return pendulum
}

