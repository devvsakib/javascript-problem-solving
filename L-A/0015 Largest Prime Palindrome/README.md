# 0015 Largest Prime Palindrome ( L-A )

## Problem

Write a JavaScript function called largestPrimePalindrome that takes an integer **n** as input and returns the largest prime palindrome that is less than or equal to **n**. A prime palindrome is a number that is both prime and reads the same forward and backward.

**Example**

```
If the input n is 100, the function should return 7 because the largest prime palindrome less than or equal to 100 is 7.

If the input n is 50, the function should return 7 because 7 is the largest prime palindrome less than or equal to 50.

If the input n is 10, the function should return 7 because 7 is the largest prime palindrome less than or equal to 10.
```

## Solutions

```javascript
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function isPalindrome(num) {
  const numStr = num.toString();
  const reversedStr = numStr.split("").reverse().join("");
  return numStr === reversedStr;
}

function largestPrimePalindrome(n) {
  for (let i = n; i >= 2; i--) {
    if (isPrime(i) && isPalindrome(i)) {
      return i;
    }
  }
  return null; // No prime palindrome found in the range
}

// Test cases
console.log(largestPrimePalindrome(100)); // 7
console.log(largestPrimePalindrome(50)); // 7
console.log(largestPrimePalindrome(10)); // 7
```

## How it works

1. The isPrime function checks whether a given number is prime using a primality test that efficiently eliminates multiples of 2 and 3 and then checks for divisibility by numbers of the form 6k ± 1.

2. The isPalindrome function checks whether a given number is a palindrome by converting it to a string, reversing the string, and comparing it to the original string.

3. The largestPrimePalindrome function starts from the given number n and counts down to 2, checking each number in reverse order. It uses the isPrime and isPalindrome functions to find the largest prime palindrome in the given range.

## References

- [ChatGPT](https://chat.openai.com/)

## Problem Added By

- [Tipchan](https://github.com/tsongtheng)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
