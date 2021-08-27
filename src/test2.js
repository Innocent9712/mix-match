let arr = ["GFG_1", "GeeksForGeeks", "Geeks", "Computer Science Portal", "Yellow", "green", "splash", "pink",2,3,4,5,6,7,7,8];
let number = 2;

// // Randomizing the inputs
// let mixIt = (array, pairs) => {
//     if (array.length % pairs === 0) {
//         let newArr = [...array]
//         let mixedArr = []
//         let num = Math.floor(Math.random() * newArr.length);
//         for (let index = newArr.length/pairs; index > 0; index--) {
//             let pairArr = []   
//             for (let j = 1; j <= pairs; j++) {
//                 if (newArr[num]) {
//                     pairArr.push(newArr[num])
//                     newArr.splice(num,1)
//                     num = Math.floor(Math.random() * newArr.length)
//                 } else {
//                     num = Math.floor(Math.random() * newArr.length);
//                 }
//             }
//             mixedArr.push(pairArr)
//             num = Math.floor(Math.random() * newArr.length);
//         }
//         console.log(newArr)
//         console.log(mixedArr)
//         return mixedArr;
//     } else {
//         console.log("The array is not fully divisible by the pair value")
//     }
   
// }

// let displayPairing = (data) => {
//     // let dataContainer = document.createElement('div')
//     // dataContainer.classList.add('display-result')
//     data.forEach((datum)=> {
//         console.log(`pair ${data.indexOf(datum)+1} is ${datum}`)
//     })
// }

// displayPairing(mixIt(arr, number))
// // mixIt(arr, number)

let mixIt = (array, pairs) => {
    let pairValue = pairs
if (array.length % pairValue === 0) {
    let newArr = [...array]
    let mixedArr = []
    let num = Math.floor(Math.random() * newArr.length);
    for (let index = newArr.length/pairs; index > 0; index--) {
        let pairArr = []   
        for (let j = 1; j <= pairValue; j++) {
            if (newArr[num]) {
                pairArr.push(newArr[num])
                newArr.splice(num,1)
                num = Math.floor(Math.random() * newArr.length)
            } else {
                num = Math.floor(Math.random() * newArr.length);
            }
        }
        mixedArr.push(pairArr)
        num = Math.floor(Math.random() * newArr.length);
    }
    console.log(newArr)
    console.log(mixedArr)
    return mixedArr;
} else {
    console.log("The array is not fully divisible by the pair value")
}

}

mixIt(arr, number)

result-container
    pair-list
        group-name
        group-items
            item-name