# 0008 countBadData( L-B )

## Problem

Write a function that returns the number of bad data in an array.

## Test Cases

- countBadData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 0
- countBadData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "L-B"]); // 1
- countBadData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "L-B", "L-B"]); // 2
- countBadData([1, 2, 3, 4, 5, 6, 7, -8, 9, -10, "L-B", "L-B"]); // 4

## Solution

```javascript
function countBadData(data) {
    let count = 0;
    for (const ele of data) {
        if (typeof ele !== "number") {
            count++;
        }
    }
    return count;
}

const dataInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "L-B", "L-B"];
const badData = countBadData(dataInput);
```


## How it works

- The function takes an array as a parameter.
- It creates a variable called count and assigns it a value of 0.
- It creates a for loop that iterates through the array.
- It checks if the element is not a number.
- If it is not a number, it increments the count variable by 1.
- It returns the value of count.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Increment_and_decrement_operators)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

## Problem Added By

- [GitHub](https://www.github.com/devvsakib)
- [LinkedIn](https://www.linkedin.com/in/devvsakib)
- [Twitter](https://twitter.com/devvsakib)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.