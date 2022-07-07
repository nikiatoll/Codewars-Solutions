//P:arams: only strings, with or without spaces
//R:eturn: string with words reversed in the same order, spaces preserved
//E:xample: reverseWords("the quick brown  dog") => "eht kciuq nworb  god"
//P:sudo: seperate sentence into seperate words, then seperate words into seperate letters, reverse order of letters in each word, join letters back into words, join words back into sentence, return

function reverseWords(str) {
    // return str.split(' ').map(x => x.split('').reverse().join('')).join(' ')
    let temp = str.split(' ').map(x =>  x.split('').reverse().join('')).join(' ')
    console.log(temp)
}
reverseWords("the quick brown  dog")