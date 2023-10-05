# Two-dimensional array(L-B)

## Problem
Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

## Solution

```javascript
const revMyString = str => {
    let revStr = "";
    const arrStr = str.split("")
    for (let i = arrStr.length - 1; i >= 0; i--) revStr += arrStr[i]
    return revStr;

}
```

## How it works
- We split the string into an array of characters
- We loop through the array from the last index to the first index
- We add each character to the revStr variable
- We return the revStr variable

## References
- [Wikipedia](https://en.wikipedia.org/wiki/Fizz_buzz)

## Problem Added By
- [GitHub](https://www.github.com/devvsakib) 



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.