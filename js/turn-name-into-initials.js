// only passed 2 words and one space, no empty strings
// give back initials, first letter of names with period seperating
// fn("Peter Johnson")=> "P. J"
// first, get first letter of each name by getting index of the space and taking the next letter and the first letter and template literals to put them together

function abbrevName(fullName) {
    let firstInitial, lastInitial = "";
    lastInitial = fullName[fullName.indexOf(" ") + 1].toUpperCase()
    firstInitial = fullName[0].toUpperCase()
    console.log(lastInitial)
    return (`${firstInitial}.${lastInitial}`)
}

// return name.split(' ').map(i => i[0].toUpperCase()).join('.')

console.log(abbrevName("Peter Jhonson"))