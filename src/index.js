let count = document.querySelector('.count')
let addItem = document.querySelector('#addItem')
let itemInput = document.querySelector('input')
let itemsContainer = document.querySelector('.itemsContainer')
let generatePairs = document.querySelector('.generate')
let itemsArray = []


count.innerHTML = `Count: ${itemsArray.length}`

let addToArray = (array) => {
    if (itemInput.value != "") {
        let value = itemInput.value
        console.log(value)
        array.push(value)
        itemInput.value = ""   
    } //console.log('enter an input!') // modify this later to give a warning.
}
testArr = ["swim", "dream", "koala"]

// Randomizing the inputs
let mixIt = (array, pairs) => {
    if (array.length % pairs === 0) {
        let newArr = [...array]
        let mixedArr = []
        let num = Math.floor(Math.random() * newArr.length);
        for (let index = newArr.length/pairs; index > 0; index--) {
            let pairArr = []   
            for (let j = 1; j <= pairs; j++) {
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

//Getting the output from the randomization and sending to the UI
let displayPairing = (data) => {

}

let updateItemsList = (array) => {
    if (array.length != 0) {
        let p = document.createElement('li')
        array.forEach(item => {
            p.innerHTML = item
            p.classList.add('itemStyle')
            itemList.appendChild(p)
            count.innerHTML = `Count: ${itemsArray.length}`
        });
        console.log(array)
    }
}

addItem.addEventListener('click', ()=> {
    addToArray(itemsArray)
    updateItemsList(itemsArray, itemsContainer)

})

generatePairs.addEventListener('click', ()=> {
    displayPairing(mixIt(itemsArray))
})
