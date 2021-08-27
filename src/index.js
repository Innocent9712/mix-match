let count = document.querySelector('.count')
let addItem = document.querySelector('#addItem')
let itemInput = document.querySelector('#inputs')
let itemsContainer = document.querySelector('.itemsContainer')
let generatePairs = document.querySelector('.generate')
let dataContainer = document.querySelector('.result-container')
let itemsArray = []


count.innerHTML = `Count: ${itemsArray.length}`

let addToArray = (array) => {
    if (itemInput.value != "") {
        let value = itemInput.value
        // console.log(value)
        array.push(value)
        itemInput.value = ""   
    } //console.log('enter an input!') // modify this later to give a warning.
}

// Randomizing the inputs
let mixIt = (array, pairs) => {
    let pairInput = document.getElementById('pairs').value
    pairs = pairInput
    if (array.length !== 0 && array.length % pairs === 0) {
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
        // console.log(newArr)
        console.log(mixedArr)
        return mixedArr;
    } else if (pairs <= 0 || pairs != "") {
        console.log("Check the value of your pair or your list")
    } else {
        console.log("The array is not fully divisible by the pair value")
    }
   
}

//Getting the output from the randomization and sending to the UI
let displayPairing = (data) => {
    if (data && data.length !== 0 ) {
        console.log(data)
        data.forEach((datum)=> {
            let pairList = document.createElement('li')
            pairList.classList.add('pair-list')
            let itemNumber = document.createElement('p')
            itemNumber.classList.add('group-name')
            let itemsGroup = document.createElement('ul')
            itemsGroup.classList.add('group-items')
            itemNumber.innerHTML= `Group ${data.indexOf(datum)+1}`
            pairList.appendChild(itemNumber)
            datum.forEach(item=> {
                let itemName = document.createElement('li')
                itemName.classList.add('item-name')
                itemName.innerHTML=`${item}, `
                itemsGroup.appendChild(itemName)
            })
            pairList.appendChild(itemsGroup)
            dataContainer.appendChild(pairList)
            console.log(dataContainer)
            console.log(`pair ${data.indexOf(datum)+1} is ${datum}`)
        })
    } else {
        console.log('No data to display!')
    }
    
}

let updateItemsList = (array) => {
    if (array.length != 0) {
        let p = document.createElement('li')
        array.forEach(item => {
            p.innerHTML = item
            p.classList.add('itemStyle')
            itemsContainer.appendChild(p)
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
