//P param will be a year, positive int
//R return century its in, from year one upto and including year 100
//E century(2050) => 21
//P divide by 100 then round up

function century(year) {
    return Math.ceil(year / 100)
}