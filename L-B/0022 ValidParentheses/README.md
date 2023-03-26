# Valid Parentheses (L-B)

## Problem

Given a string `s` containing just the characters `'(', ')', '{', '}', '['` and `']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

## Testcases

- Input: `"()"` <br>
  Output: `true`

- Input: `"()[]{}"` <br>
  Output: `true`

- Input: `"(]"` <br>
  Output: `false`

## Solution

```javascript
const ValidParentheses = (s) => {
  var stack = [];

  obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i of s) {
    if (Object.keys(obj).includes(i)) {
      stack.push(i);
    } else if (stack && obj[stack[stack.length - 1]] == i) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0 ? true : false;
};
```

## How it works

- We initialize a `stack` to keep track of the parentheses.
- We make an object `obj` which keeps the values for the corresponding opening and closing brackets.
- The function runs a for loop for the string `s`.
- If the current letter is part of the `obj`'s keys, then push the letter to the `stack`.
- Else if the stack is not empty and the top of the `stack` corresponds with the current letter, then pop an element out of the `stack`.
- Else, return `false`
- If the for loop terminates normally then return `true` if the stack is empty or else `false`.

## References

- [LeetCode](https://leetcode.com/problems/valid-parentheses/)

## Problem Added By

- [GitHub](https://www.github.com/khairalanam)
- [LinkedIn](https://www.linkedin.com/in/khair-alanam-b27b69221/)
- [Twitter](https://twitter.com/khair_alanam)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
