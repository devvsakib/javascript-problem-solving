# 0009 objectToArray ( L-B )

## Problem

Write a function to convert an object into an array of arrays containing key and value.

### Example

```
objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
```

## Solution

```javascript
function objectToArray(object) {
  return Object.entries(object)
}
```

## References

-   [Objects MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
-   [Arrays MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Problem Added By

-   [GitHub](https://www.github.com/giomine)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
