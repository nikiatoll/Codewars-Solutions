function accum(s) {
    s=s.toUpperCase()
    const x = s.split('')
    const mumble = x.map((letter, index)=>{
        while (letter.length<=index){
            letter += letter.toLowerCase()[0]
        }
        return letter
    })
    return mumble.join('-')
}
console.log(accum('abcdef'))