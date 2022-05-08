// P: will it only be strings? yes. will case matter? no. will there be empty strings? yes.
// R: should empty strings return true or false? true. return or console.log()? return
// E: isIsogram("") => true
//    isIsogram("isIsogram") => false
// P: normalize case, 


function isIsogram(str) {
    str = str.toLowerCase().split('')
    let iso = true
    for(c of str){
        str.indexOf(c)!==str.lastIndexOf(c)? iso = false : null
    }
    return iso
}

//learned about Set after submitting kata. correct solution using set would look like:
//function isIsogram(str){
//  return new Set(str.toUpperCase()).size == str.length;
//}