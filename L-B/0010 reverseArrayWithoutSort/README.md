# 0010 reverseArrayWithoutSort ( L-B )

## Problem

Implement a JavaScript function that takes an array of numbers and returns a new array with the numbers in reverse order.

## Test Cases

- console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
- console.log(reverseArray([9, 9, 2, 3, 4])); // [4, 3, 2, 9, 9]

## Solution

```javascript
function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
```

## How it works

-  We create a function called reverseArray that takes an array as a parameter.
-  We create a result array.
-  We loop through the array backwards.
-  We push the current element to the result array.
-  We return the result array.

## References

-  [freecodecamp](https://www.freecodecamp.org/news/how-to-reverse-an-array-in-javascript-in-3-different-ways-75e4763c68cb/)
-  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

## Problem Added By

-  [GitHub](https://www.github.com/devvsakib)
-  [LinkedIn](https://www.linkedin.com/in/devvsakib)
-  [Twitter](https://twitter.com/devvsakib)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.