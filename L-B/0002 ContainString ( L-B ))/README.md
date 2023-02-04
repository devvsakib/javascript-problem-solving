# 0002 ContainString ( L-B ) 

## Problem
Given two strings s1 and s2, write a function to return true if s2 contains s1. If not, reverse s2 and check if s2 contains s1. If it does, return true. If not, return false.

## Test Cases
- s1 = "cs" and s2 = "cs", the function should return true.
- s1 = "cs" and s2 = "cse", the function should return true.
- s1 = "cs" and s2 = "ces", the function should return false.
- s1 = "cs" and s2 = "disco", the function should return true.
- s1 = "cs" and s2 = "disoc", the function should return false.


## Solution
```javascript
function stringContain(s1, s2) {
    if (s1 === s2) {
        return true;
    }
    if (s2.includes(s1)) {
        return true;
    }
    let revStr = "";
    for (let i = s2.length - 1; i >= 0; i--) {
        revStr += s2[i]
    }

    if (revStr.includes(s1)) {
        return true;
    }
    return false
}

s1 = "cs";
s2 = "disco";
console.log(stringContain(s1, s2));
```

## How it works
- The function takes two strings as parameters.
- The first if statement checks if the two strings are equal. If they are, it returns true.
- If the two strings are not equal, it creates a new string by reversing the second string.
- The third if statement checks if the reversed string contains the first string. If it does, it returns true.
- If the two strings are not equal and the reversed string does not contain the first string, it returns false.

## References
- [Wikipedia](https://en.wikipedia.org/wiki/String_searching_algorithm)
- [GeeksforGeeks](https://www.geeksforgeeks.org/naive-algorithm-for-pattern-searching/)
- [StackOverflow](https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript)

## Problem Added By
- [GitHub](https://www.github.com/devvsakib)
- [LinkedIn](https://www.linkedin.com/in/devvsakib)
- [Twitter](https://twitter.com/devvsakib)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.