function printArray(array){
    console.log(array)
}


function printArrayIfEven(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            console.log(array[i])
        }
    }
}


function printSumOfArray(array){
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}


function printMaxElementInArray(array){
    let maxElement = Math.max(array)
    console.log(maxElement)
}

function addNewElement(array, index, element){
    array.splice(index, 0, element)
    return array
}


function deleteElement(array, index, element){
    array.shift(index, 0, element)
    return array
}





































