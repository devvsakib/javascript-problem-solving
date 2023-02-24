# 0013 ageSumObject ( L-B )

## Problem

Given an array of objects, return the sum of the age of all the objects.

## Test Cases

- Input: [{name: 'John', age: 20}, {name: 'Jane', age: 30}, {name: 'Jack', age: 40}], Output: 90
- Input: [{name: 'John', age: 20}, {name: 'Jane', age: 30}], Output: 50
- Input: [{name: 'John', age: 20}], Output: 20

## Solution

```javascript

const people = [
    { name: "DevvSakib", age: 20 },
    { name: "Taulo", age: 15 },
    { name: "Paulo", age: 22 },
    { name: "Kaulo", age: 52 },
    { name: "Yaulo", age: 21 },
]

const sumAge = people.reduce((ac, cur) => ac + cur.age, 0)
```

## How it works

- We use the reduce method to iterate through the array and add the age of each object to the accumulator.
- The reduce method takes two parameters, the first is a callback function and the second is the initial value of the accumulator.
- The initial value of the accumulator is 0.
- The reduce method returns the final value of the accumulator.
- The final value of the accumulator is the sum of the age of all the objects.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Wikipedia](https://en.wikipedia.org/wiki/Reduce_(higher-order_function))
- [GeeksforGeeks](https://www.geeksforgeeks.org/javascript-array-reduce-method/)
- [JavaScript Info](https://javascript.info/array-methods#reduce-reduceright)

## Problem Added By

- [GitHub](https://www.github.com/devvsakib)
- [LinkedIn](https://www.linkedin.com/in/devvsakib)
- [Twitter](https://twitter.com/devvsakib)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.