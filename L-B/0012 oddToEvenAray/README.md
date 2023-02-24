# 0012 oddToEven ( L-B )

## Problem

Given an array of even and odd numbers, return an array of even, convert odd numbers to even.

## Test Cases

- Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Output: [2, 2, 4, 4, 6, 6, 8, 8, 10, 10]
- Input: [1, 3, 5, 7, 9], Output: [2, 4, 6, 8, 10]
- Input: [2, 4, 6, 8, 10], Output: [2, 4, 6, 8, 10]

## Solution

```javascript

const numbers = [12, 43, 11, 77, 60, 40, 45];

const oddToEven = arr => {
    const evenArr = arr.map(ele => {
        return ele % 2 !== 0 ? ele + 1 : ele
    })
    return evenArr;
}
oddToEven(numbers);

```

## How it works

- The function takes an array as a parameter.
- It creates a variable called evenArr and assigns it a value of the array passed as a parameter.
- Using the map method, it iterates through the array and checks if the element is odd or even.
- If the element is odd, it adds 1 to it and returns it.
- If the element is even, it returns it.
- It returns the evenArr variable.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Wikipedia](https://en.wikipedia.org/wiki/Map_(higher-order_function))
- [GeeksforGeeks](https://www.geeksforgeeks.org/javascript-array-map-method/)

## Problem Added By

- [GitHub](https://www.github.com/devvsakib)
- [LinkedIn](https://www.linkedin.com/in/devvsakib)
- [Twitter](https://twitter.com/devvsakib)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.