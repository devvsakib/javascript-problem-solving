# 0006 Repate a String Num times

repeat  a given string `str` for `num` of times, and return empty in case the num is zero or negative number. 

#### Note: you are not allowd to use `.repeat()` method.

## Test case:

- Input: 'abc', 3 => Output: 'abcabcabc'
- Input: 'abc', 0 => Output: ''
- Input: 'abc', -2 => Output: ''

## Solution:

>- JavaScript.

```
const repeatStringNumTimes = (str, num) => {
  if (num < 1) {
    return "";
  }
  // here I used recursion technique to solve the problem
  return str + repeatStringNumTimes(str, num - 1);
};
```

>- [click](https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion) To lern more about recursion method 
