function DNAStrand(dna) {
    let compDNA = Array.from(dna).map(x=> {
        // if (x==='G')
        //     return 'C'
        // else if (x==='C')
        //     return 'G'
        // else if (x==='A')
        //     return 'T'
        // else
        //     return 'A'
        switch(x){
            case 'G':
                return 'C'
                break;
            case 'C':
                return 'G'
                break;
            case 'A':
                return 'T'
                break;
            case 'T':
                return 'A'
                break;
            default: 
                return
        }
    })
    return compDNA.join('')
}

console.log(DNAStrand('ATTGCA'))