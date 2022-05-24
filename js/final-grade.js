// P params will be a number grade from 0 to 1000 and a number of projects from 0 and above
// R return final grade, 100 if grade is over 90 or projects is over 10, 90 if grade is over 75 and projects over 5, 75 if grade is over 50 and projects over 2, 0 otherwise
// E finalGrade(51, 6) => 75
// P set up or comparisons to see if either grades or projects pass the threshold, return the corresponding final grade

function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100
    } else if (exam > 75 && projects >= 5) {
        return 90
    } else if (exam > 50 && projects >= 2) {
        return 75
    }
    return 0
}