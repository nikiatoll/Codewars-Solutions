//P: take in an array, populated by strings of names or empty
//R: return a message like the one next to facebook likes. If array is empty, return "no one likes this" if there are less than 4 names, return the names in the "blank, blank and blank like this" format, else return the first two names and the number of remaining names in the format "blank, blank, and x others like this."
//E likes(["allen", "drake", "bobby", "julian"]) => "allen, drake, and 2 others like this"
//P catch the cases of empty array by returning no one likes this for those cases, then catch cases where more than 3 people like by returning the first two names and a variable number for the rest of the names, and taking the repeatable "blank likes this" write out names and format it for 1-3 people

function likes(names) {
    switch (names.length) {
        case 0:
            return `no one likes this`
            break;
        case 1:
            return `${names[0]} likes this`
            break;
        case 2:
            return `${names[0]} and ${names[1]} like this`
            break;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
            break;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
            break;
    }
}
