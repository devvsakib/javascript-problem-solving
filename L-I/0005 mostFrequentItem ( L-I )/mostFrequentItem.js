const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 1]

const mostFrequentItem = arr => {
    const obj = arr.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr]++
        } else {
            acc[curr] = 1
        }
        return acc
    }, {})
    const max = Math.max(...Object.values(obj))
    return Object.keys(obj).filter(key => obj[key] === max)
}

console.log(mostFrequentItem(arr))