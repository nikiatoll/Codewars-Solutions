//P: params: only unsignesd integers
//R: return: its digits in decending order
//E: decendingOrder(59248) => 98542
//P: seperate digits (turn into string), sort, combine digits (turn into number)

function descendingOrder(n) {
    return Number(n.toString().split('').sort((a, b) => b - a).join(''))
}