// P: Parameters. Supplied array will not be empty, will contain signed ints
// R: return smallest int
// E: findSmallestInt([1,10,-5, 6]) => -5
// P: store first value of array, replace value if smaller value is encountered, return value

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallest = args[0]
        for (const x in args) {
            x<smallest? smallest=x:smallest
        }
        return smallest
    }
}

//Math.min can be used to consolidate into one line:
//return Math.min(...args)