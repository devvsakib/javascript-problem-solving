#  0005 mostFrequentItem ( L-I )

## Problem

Given an array of items, return the most frequent item.


## Test Cases

- Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Output: 1
- Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1], Output: 1
- Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Output: 1


## Solution

```javascript

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
```


## How it works

- Create an object with the number of times each item appears in the array
- Get the maximum value of the object
- Return the keys of the object that have the maximum value


## References

- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


## Problem Added By

- [GitHub](https://www.github.com/devvsakib) 
- [LinkedIn](https://www.linkedin.com/in/devvsakib)
- [Twitter](https://twitter.com/devvsakib)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.