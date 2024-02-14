function printArrayAsList(array){
    document.write('</ul>')
    array.forEach(element => {
        document.write('<li>' + element + '</li>')
    })
    document.write('</ul>')
}

function findFruitIndex(fruitName, array) {
    const lowerCaseFruitName = fruitName.toLowerCase()
    return array.findIndex(fruit => fruit.toLowerCase() === lowerCaseFruitName)
}