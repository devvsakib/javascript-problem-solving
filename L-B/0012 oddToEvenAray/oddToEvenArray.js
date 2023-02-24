const numbers = [12, 43, 11, 77, 60, 40, 45];

const oddToEven = arr => {
    const evenArr = arr.map(ele => {
        return ele % 2 !== 0 ? ele + 1 : ele
    })
    return evenArr;
}
oddToEven(numbers);