//P params are 2 arrays, both only ints
//R return first array without matching elements in second array
//E arrayDiff([1,2,3,2],[5,2]) => [1,3]
//P

function arrayDiff(a, b) {
    return a.filter(num => !b.includes(num))
}


//My attempt to make more efficient by reading through b for values a has, marking all indexes that contain a match, then removing all at once

// function arrayDiff(a, b) {
//     const indices = [];
//     b.forEach(e=>{
//       let idx = a.indexOf(e);
//         while (idx != -1) {
//             indices.push(idx);
//             idx = a.indexOf(e, idx + 1);
//         }  
//     })
//     for (let i of indices) {
//         delete a[i]
//     }
//     return a.filter(x=>x)
// }

console.log(arrayDiff([17, -19, 17, 16, 8, 0, 20, 7, -2, 1, 12, -8, -11, 17, -6], [17, -19, 17, 16, 8, 0, 20, 7]))