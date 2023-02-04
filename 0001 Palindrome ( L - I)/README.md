# Palindrome (L-I)

## Problem
- Write a function in JavaScript that takes an integer as input and returns a boolean value indicating whether the number is a palindrome or not.

- A palindrome number is a number that remains the same when its digits are reversed. For example, 121, 1221, 12321 are all palindrome numbers. The function should return true if the given number is a palindrome, and false otherwise.

- The function should be able to handle negative numbers and should not convert the number to a string or array. Instead, it should perform the check by manipulating the number directly.

- Example Inputs and Outputs:

- Input: 121 -> Output: true
- Input: -121 -> Output: false
- Input: 10 -> Output: false
- Input: 12321 -> Output: true

## Solution

```javascript
let n = 12321;

if(palindrome(n)){
    console.log( n + " is a Palindrome number");
}else{
    console.log( n + " is not a Palindrome number");
}

/* function to check if a number is palindrome or not 
by reversing the number and comparing it with the original number */
function palindrome(n){
    // create a temp variable to store the value of n
    let temp = n;
    // create a variable to store the reverse of n
    let rev = 0;
    // reverse the number
    while(temp > 0){
        let lastDigit = temp % 10;
        rev = rev * 10 + lastDigit;
        temp = Math.floor(temp / 10);
    }
    // check if the reverse is equal to n
    return rev == n;
}

// using two pointers
function palindromeTwoPointer(n){
    // convert the number to string
    let str = n.toString();
     // if the number is negative, remove the negative sign from the string
     if (str[0] === '-') {
        return false;
    }
    // create two pointers
    let start = 0;
    let end = str.length - 1;
    // loop through the string
    while(start < end){
        // check if the characters at the two pointers are equal
        if(str[start] != str[end]){
            return false;
        }
        // increment start and decrement end
        start++;
        end--;
    }
    return true;
}
```

## How it works
### First Approach :
- Create a variable temp to store the value of n for later use.
- Create a variable rev to store the reverse of n. rev is initially set to 0.
- Use a while loop to reverse the number n. The loop continues as long as temp is greater than 0.
-   a. In each iteration, the last digit of temp is calculated by taking the remainder when temp is divided by 10.
    b. The last digit is then added to rev by multiplying rev by 10 and adding the last digit.
    c. The value of temp is then updated by dividing it by 10 and flooring the result. This discards the last digit of temp.
- After the while loop, the function checks if the reversed number rev is equal to the original number n.
- If rev is equal to n, the function returns true, indicating that n is a palindrome. Otherwise, the function returns false.

### Second Approach : 
- First, the number is converted to a string.
- If the first character of the string is a negative sign (-), the function returns false as negative numbers cannot be palindromes.
- Two pointers are created, start and end, and initialized to the first and last characters of the string, respectively.
- The function then enters a loop, which continues as long as start is less than end.
- Within the loop, the characters at the start and end pointers are compared. If they are not equal, the function returns false as the number is not a palindrome.
- If the characters are equal, start is incremented and end is decremented, and the loop continues.
- When the loop is finished, the function returns true, indicating that the number is a palindrome.


## References
- [Wikipedia](https://en.wikipedia.org/wiki/Palindromic_number#)


## Problem Added By
- [GitHub](https://www.github.com/hirentimbadiya) 
- [LinkedIn](https://www.linkedin.com/in/hirentimbadiya74)
- [Twitter](https://twitter.com/heyhiru)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
