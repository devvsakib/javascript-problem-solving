# Get the file extension

## Problem

Write a function that takes a string and returns the file extension, which is the string after the last dot (.) in the string. If there is no dot in the string, return empty string.

## Solution

```javascript
function extractFileExtension(fileName) {
  // Split the file name into an array of strings at the dot character.
  const splitFileName = fileName.split(".");

  // Check if the split file name array has more than one element.
  if (splitFileName.length > 1) {
    // Get the last element in the array, which is the file extension.
    const fileExtension = splitFileName.pop();

    // Return the file extension.
    return fileExtension;
  }
  // The file name does not have an extension, so return an empty string.
  return "";
}
```

## How it works

- The `extractFileExtension` function takes a string as an argument.
- The `split` method is used to split the string into an array of strings at the dot character.
- The `pop` method is used to get the last element in the array, which is the file extension.
- The file extension is returned.

## References

- [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

## Problem Added By

- [GitHub](https://github.com/aladin002dz)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
