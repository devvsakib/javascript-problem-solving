# 0018 EvenOddChecker

## Problem

Given a number N, print whether the number is Even or Odd.

## Test Cases

- Input: 10, Output: Even
- Input: 5, Output: Odd

## Solution

```javascript
function evenOddChecker(n){         
    if (n % 2 === 0){               
        return "Even Number";
    }
    else{
        return "Odd Number";
    }
}

n = 10;
console.log(evenOddChecker(n));
```

## How it works
- The function takes a number as a parameter.
- It checks whether the number is divisble by 2 or not.
- If it is divisible by 2. It is even number. Otherwise odd number.

## References
- [Programmiz](https://www.programiz.com/javascript/examples/even-odd)

## Problem Added By
- [Github](https://www.github.com/SahilSinghTomar)