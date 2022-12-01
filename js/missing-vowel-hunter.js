function missingVowel(str){
    //list all vowls, loop each letter and see if 
    let vowels = 'aeiou'
    for(let i=0; i<vowels.length; i++){
        if (str.indexOf(vowels[i])=== -1){
            return i
        }
    }
}

console.log(missingVowel("John Doe hs seven red pples under his bsket"), '0')
console.log(missingVowel("Bb Smith sent us six neatly arranged range bicycles"), '3')