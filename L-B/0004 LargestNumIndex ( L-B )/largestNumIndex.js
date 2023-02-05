function lgNumIndex(array) {
    let largestNum = array[0];

    for (const ele of array) {
        if (largestNum < ele) {
            largestNum = ele
        }
    }
    let indexofNum = array.indexOf(largestNum);
    return indexofNum
}
const arr = [12, 3, 1, 54, 65, 4, 9]
console.log(lgNumIndex(arr)); // expected 4
