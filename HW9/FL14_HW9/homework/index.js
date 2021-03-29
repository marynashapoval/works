// function numberToString() {
//     const array = [1, '2', 3, '4'];
//     let a = [];
//     for(let i = 0; i < array.length; i++) {
//         let value;
//         if (array[i] !== isNaN) {
//             value = array[i].toString();
//             a.push(value);
//         } else if (array[i] === isNaN){
//             value = parseInt(array[i], 10);
//             a.push(value);
//         }
//     }
//     return a;
// }
// console.log(numberToString()); // task 1

function executeForEach(arrayValues, func) {
    let array = [];
    for (let i = 0; i < arrayValues.length; i++) {
        array.push(func(arrayValues[i]));
    }
    return array;
} // task 2

function multiplyArray(arrayValues, func) {
    let array = [];
    for (let i = 0; i < arrayValues.length; i++) {
        arrayValues[i] = +arrayValues[i];
    }
    return executeForEach(arrayValues, func);
} // task 3

function filterArray(arrayValues, func) {
    let checkArray = executeForEach(arrayValues, func);
    let array = [];
    for (let i = 0; i < arrayValues.length; i++) {
        if (checkArray[i]) {
            array.push(func(arrayValues[i]));
        }
    }
    return array;
} // task 4

function getValuePosition(positionedArray, positionValue) {
    for (let i = 0; i < positionedArray.length; i++) {
        if (positionedArray[i] === positionValue) {
            return i + 1;
        }
    }
    return false;
} // task 5

function flipOver(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >=0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
} //task 6

function numbersBetween(start, end) {
    let array = [];
    for (let i = start; i <= end; i += 1) {
        array.push(i);
    }
    return array;
} // task 7

function getArrayOfKeys(arrayValues, func) {  
    const fruits = [
        { name: 'apple', weight: 0.5 },
        { name: 'pineapple', weight: 2 }
      ];
         
    let array = [];
    // for (let i = 0; i < arrayValues.length; i++) {
    //     array.push(arrayValues.)
    // }
    for (array[i++] in arrayValues) {}
    return array;
}
