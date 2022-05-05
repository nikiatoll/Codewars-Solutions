function DNAStrand(dna) {
    let compDNA = Array.from(dna).map(x=> {
        if (x==='G')
            return 'C'
        else if (x==='C')
            return 'G'
        else if (x==='A')
            return 'T'
        else
            return 'A'
    })
    return compDNA.join('')
}

console.log(DNAStrand('ATTGCA'))