# 0027 removeDuplicates ( L-B )

## Problem
Write a function that removes duplicate values from the given input.
- If the input is an array, return a new array with unique values.
- If the input is a string, return a new string with duplicate characters removed.
- The original order must be preserved.

## Solution
```js
function removeDuplicates(input) {
    let unique = [];
    for (let i = 0; i < input.length; i++) {
        if (!unique.includes(input[i])) {
            unique.push(input[i]);
        }
    }
    if(typeof(input) === "string"){
       unique = unique.toString().replace(/,/g, '');
    }
    console.log(unique);
    return unique;
}
```

## Test Cases
```js
removeDuplicates([2, 4, 8, 4, 2, 6, 9, 2, 6, 8, 10]);
// Output: [2, 4, 8, 6, 9, 10]

removeDuplicates([1, 1, 1, 4, 0, 6, -2, 2, 6, 7, 10]);
// Output: [1, 4, 0,  6, -2, 2, 7, 10]

removeDuplicates("zoom");
// Output: "zom"

removeDuplicates("hello world");
// Output: "helo wrd"
```

## How it works
- Create an empty array called unique
- Loop through each character or element in the input
- Check if the current value already exists in unique
- If it does not exist, we add it to unique
- After the loop:
- If the input is a string, we convert the array into a string
- Remove commas using replace
- Finally, return the result

## References
- [MDN – Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [MDN – typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)


## Problem Added By
- [GitHub](https://github.com/rimsha-shoukat)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
