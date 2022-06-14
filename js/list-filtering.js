//P: params: an array of unsigned ints and strings, strings may be numbers. filter out any thing not an int
//R: return array of ints, filtering any elements of type string    
//E: filter_list([1,2,'a','b'])=> [1,2]
//P: filter array using type of element, only accept integers

function filter_list(l) {
    return l.filter(x => typeof (x) == 'number')
}