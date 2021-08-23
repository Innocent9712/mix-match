let count = document.querySelector('.count')
let addItem = document.querySelector('#addItem')
let itemInput = document.querySelector('input')
let itemsContainer = document.querySelector('.itemsContainer')
let itemsArray = []


count.innerHTML = `Count: ${itemsArray.length}`

let addToArray = (array) => {
    if (itemInput.value != "") {
        let value = itemInput.value
        console.log(value)
        array.push(value)
        return itemInput.value = ""   
    } console.log('enter an input!') // modify this later to give a warning.
}

let updateItemsList = (array, itemList) => {
    if (array != []) {
        let p = document.createElement('li')
        array.forEach(item => {
            p.innerHTML = item
            p.classList.add('itemStyle')
            itemList.appendChild(p)
            count.innerHTML = `Count: ${itemsArray.length}`
        });
    }
}
addItem.addEventListener('click', ()=> {
    addToArray(itemsArray)
    updateItemsList(itemsArray, itemsContainer)

})
