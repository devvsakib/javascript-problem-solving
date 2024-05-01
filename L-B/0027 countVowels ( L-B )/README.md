# 0027 countVowels ( L-B )


## Problem
Write a function called countVowels that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string. The function should be case-insensitive, meaning it should count both uppercase and lowercase vowels.

## Solution

```
  //There are two ways to solve this problem 

    //Solution #1
    function countVowels(string) {

        const str = string.toLowerCase();

        let vowelCount = 0;

        for (let i = 0; i < str.length; i++) {

            if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
                vowelCount++;
            }
        }

        return vowelCount;
    }

    //Solution #2
    function countVowels(str) {

        str = str.toLowerCase();

        const vowels = ['a', 'e', 'i', 'o', 'u'];

        let vowelCount = 0;

        for (let i = 0; i < str.length; i++) {

            if (vowels.includes(str[i])) {
                vowelCount++;
            }
        }

        return vowelCount;
    }
```

## How it works

Solution #1
- The function countVowels is defined, which takes a single parameter string, representing the input string for which we want to count the vowels.

- Inside the function, a new variable str is declared and assigned the value of the input string converted to lowercase using the toLowerCase() method. This ensures that the function is case-insensitive and will count both uppercase and lowercase vowels.

- Another variable vowelCount is declared and initialized to 0. This variable will be used to keep track of the count of vowels in the input string.

- The function enters a for loop, iterating over each character of the str string. The loop starts from i = 0 and continues until i is less than the length of the string str.

- Inside the loop, there's an if statement that checks if the current character str[i] is equal to any of the vowels 'a', 'e', 'i', 'o', or 'u'. If the condition is true (i.e., if str[i] is a vowel), then the vowelCount variable is incremented by 1.

- After the loop finishes iterating through all characters in the string, the function returns the value of vowelCount, which represents the total count of vowels found in the input string.

Solution #2
- The function countVowels is defined, which takes a single parameter str, representing the input string for which we want to count the vowels.

- Inside the function, the input string str is converted to lowercase using the toLowerCase() method. This ensures that the function is case-insensitive and will count both uppercase and lowercase vowels.

- An array vowels is defined, containing the vowels 'a', 'e', 'i', 'o', and 'u'. This array will be used to check if a character in the string is a vowel.

- Another variable vowelCount is declared and initialized to 0. This variable will be used to keep track of the count of vowels in the input string.

- The function enters a for loop, iterating over each character of the str string. The loop starts from i = 0 and continues until i is less than the length of the string str.

- Inside the loop, there's an if statement that checks if the current character str[i] is included in the vowels array using the includes method. If the condition is true (i.e., if str[i] is a vowel), then the vowelCount variable is incremented by 1.

- After the loop finishes iterating through all characters in the string, the function returns the value of vowelCount, which represents the total count of vowels found in the input string.


## References

Below is a reference to a Stack Overflow discussion on alternative approaches to this problem.
- [StackOverflow](https://stackoverflow.com/questions/29450399/counting-number-of-vowels-in-a-string-with-javascript)


## Problem Added By
Same as reference, use your any social links
- [GitHub](https://github.com/henryarpon) 
- [LinkedIn](https://www.linkedin.com/in/henryarpon/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.