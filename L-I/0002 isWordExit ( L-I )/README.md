# 0002 isWordExit ( L-I )

## Problem

Write a dictionary class, you have a setup function that takes in an array of words and a search function that takes in a word and returns true if the word is in the dictionary and false if it is not.

## Test Cases

- Input: ["hello", "world", "this", "is", "a", "test"], "test", Output: true
- Input: ["hello", "world", "this", "is", "a", "test"], "how", Output: false

## Solution

```javascript
class Dictonary {
    constructor(arr) {
        this.dict = new Set(arr);
    }

    isInDict(word) {
        return this.dict.has(word)
    };
};

const isExits = new Dictonary(['tea', 'mug', 'jug', 'bug']);

console.log(isExits.isInDict('cat'));
console.log(isExits.isInDict('bug'));
```

## How it works

- We create a class called Dictonary.
- We create a constructor that takes in an array of words.
- We create a Set from the array and assign it to a property called dict.
- We create a method called isInDict that takes in a word.
- We check if the word is in the dict Set.
- We return the result.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Set_(abstract_data_type))
- [GeeksforGeeks](https://www.geeksforgeeks.org/set-in-javascript/)
- [StackOverflow](#)

## Problem Added By

- [GitHub](https://www.github.com/devvsakib)
- [LinkedIn](https://www.linkedin.com/in/devvsakib)
- [Twitter](https://twitter.com/devvsakib)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.