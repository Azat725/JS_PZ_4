function joinArrays(array1, array2){
    let joinedArray = array1.contact(array2)
    return joinedArray
}


function commonElement(array1, array2){
    let commonArrays = array1.filter(element => array2.includes(element))
    return [new Set(commonArrays)]
}


function withoutElementsInSecondArray(array1, array2){
    let withoutElements = array1.filter(element => !array2.includes(element))
    return withoutElements
}