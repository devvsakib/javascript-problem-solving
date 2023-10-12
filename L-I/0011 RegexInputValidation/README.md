# Regex Input Validation

## Problem

Write a function in JavaScript to validate inputs using regex, taking two parameters: input string and type (email, name, address, zip code, tel).

## Solution

```javascript
function validateInput(input, type) {
  // Create a regular expression for the given type
  const regex = {
    email:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    name: /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
    address: /^[a-zA-Z0-9\s,.'-]+$/,
    "zip code": /^\d{5}(-\d{4})?$/,
    tel: /^\d{10}$/,
  };

  // Test the input against the regular expression
  return regex[type].test(input);
}
```

## How it works

- The function takes two parameters: input string and type (email, name, address, zip code, tel).
- It creates a regular expression for the given type using the regex object.
- It tests the input against the regular expression using the test() method.
- It returns true if the input is valid, and false otherwise.

## References

Regular expressions in JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

## Problem Added By

- [GitHub](https://github.com/aladin002dz)
- [LinkedIn](https://www.linkedin.com/in/mahfoudh-arous/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
