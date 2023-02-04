# FizzBuzz(L-B)

## Problem
Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

## Solution

```javascript
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```

## How it works
- The program starts with a for loop that iterates from 1 to 100.
- The first if statement checks if the number is divisible by both 3 and 5. If it is, it prints "FizzBuzz".
- The second if statement checks if the number is divisible by 3. If it is, it prints "Fizz".
- The third if statement checks if the number is divisible by 5. If it is, it prints "Buzz".
- If the number is not divisible by 3 or 5, it prints the number itself.


## References
- [Wikipedia](https://en.wikipedia.org/wiki/Fizz_buzz)
- [GeeksforGeeks](https://www.geeksforgeeks.org/fizz-buzz-program-python/)
- [StackOverflow](https://stackoverflow.com/questions/171765/what-is-the-best-way-to-implement-the-fizzbuzz-test)

## Problem Added By
- [GitHub](https://www.github.com/devvsakib) 
- [LinkedIn](https://www.linkedin.com/in/devvsakib)
- [Twitter](https://twitter.com/devvsakib)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.