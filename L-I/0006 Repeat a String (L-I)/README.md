# 0006 Repate a String Num times ( L-I )
## Problem

repeat a given string `str` for `num` of times, and return empty in case the num is zero or negative number, and without using `.repeat()` method.

## Test Cases

- str = "A" and num = 5, the function should return "AAAAA".
- str = "A" and num = 0, the function should return "".
- str = "A" and num = 2, the function should return "AA".
- str = "A" and num = -1, the function should return "".
## Solution

```javascript
const repeatStringNumTimes = (str, num) => {
  if (num < 1) {
    return "";
  }
  // here I used recursion technique to solve the problem
  return str + repeatStringNumTimes(str, num - 1);
};

console.log(repeatStringNumTimes("abc", 3));
```

## How it works

- The function takes two parameters.
- The first is a string, and the second a integer number.
- If the the second parameter is number and positive, it will return the string * number of times.

## References

- [Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion)
- [FreeCodeCamp](https://www.freecodecamp.org/news/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d/)

## Problem Added By
- [GitHub](https://github.com/ibr5500)
- [LinkedIn](https://www.linkedin.com/in/ibrahim-ahmat/)
- [Twitter](https://twitter.com/ibr_ahmat)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.