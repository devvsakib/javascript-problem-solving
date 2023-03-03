# 0014 stringCheck ( L-B )

## Problem

You are given an array with two strings. Write a function to check all the letters present in the second string is also present in the first string, ignoring the case. The function should return a boolean.

## Test Cases

- Input: ['hello', 'hey'], Output: false
- Input: ['hello', 'hello'], Output: true
- Input: ['React', 'cat'], Output: true

## Solution

```javascript

function stringCheck(arr){
    let string1 = arr[0].toLowerCase()
    let string2 = arr[1].toLowerCase()
    let flag = 0
    for (let i = 0 ; i < string2.length; i++){
      if(!string1.includes(string2[i])){
        flag += 1
      }
  }
  return flag > 0 ? false : true
}

console.log(stringCheck(arr))

```

## How it works

- First create a function that takes an array as argument.
- Create a variables 'flag' with a value of zero.
- Create two variables string1 and string2 from the first and second element of the array.
- Loop through each letters of string2 with a for loop and check the letters present in string1 by a ".includes()" function in javascript.If any of the letter in string2 is not present in string1   we have to add 1 to our  'flag' variable.Finally we use if condition to check the flag variable.If flag is zero that means all the letters of the string2 are present in string1, and return true. if flag is greater than zero , that means some letters are not present, so we retun false.


## References

- [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

## Problem Added By

- [GitHub](https://github.com/E-fais)


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
