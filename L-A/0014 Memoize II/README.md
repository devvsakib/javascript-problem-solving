# Memoize II
[LeetCode Problem]https://leetcode.com/problems/memoize-ii/

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

fn can be any function and there are no constraints on what type of values it accepts. Inputs are considered identical if they are === to each other.

## Example 1:
```javascript
Input: 
getInputs = () => [[2,2],[2,2],[1,2]]
fn = function (a, b) { return a + b; }
Output: [{"val":4,"calls":1},{"val":4,"calls":1},{"val":3,"calls":2}]
Explanation:
const inputs = getInputs();
const memoized = memoize(fn);
for (const arr of inputs) {
  memoized(...arr);
}

For the inputs of (2, 2): 2 + 2 = 4, and it required a call to fn().
For the inputs of (2, 2): 2 + 2 = 4, but those inputs were seen before so no call to fn() was required.
For the inputs of (1, 2): 1 + 2 = 3, and it required another call to fn() for a total of 2.
```

## Example 2:
```javascript
Input: 
getInputs = () => [[{},{}],[{},{}],[{},{}]] 
fn = function (a, b) { return ({...a, ...b}); }
Output: [{"val":{},"calls":1},{"val":{},"calls":2},{"val":{},"calls":3}]
Explanation:
Merging two empty objects will always result in an empty object. It may seem like there should only be 1 call to fn() because of cache-hits, however none of those objects are === to each other.
```


## Example 3:
```javascript
Input: 
getInputs = () => { const o = {}; return [[o,o],[o,o],[o,o]]; }
fn = function (a, b) { return ({...a, ...b}); }
Output: [{"val":{},"calls":1},{"val":{},"calls":1},{"val":{},"calls":1}]
Explanation:
Merging two empty objects will always result in an empty object. The 2nd and 3rd third function calls result in a cache-hit. This is because every object passed in is identical.
```

### Constraints:
```javascript
1 <= inputs.length <= 105
0 <= inputs.flat().length <= 105
inputs[i][j] != NaN
```

## Approach:
Map is perfect for storing single argument. Each consecutive argument must have cache based on previous argument, which will form a tree like structure, like this:
```javascript
fn(1,3,4) // { 1: { 3: { 4: {}}}};
fn(1,4,3) // { 1: { 3: { 4: {}}, 4: { 3: {}}}};
```
The only problem, is how do we store our result. It's been never stated, that memoized function will be called with the same amount of arguments every time. We need a way to store our result anywhere on the path and also make sure that it will never be misteaken with argument. Here is example.
```javascript
fn(1,3) // { 1: { 3: 4}};
-> 4
fn(1)   // { 1: { 3: 4}};
-> { 3: 4 } // returning cache branch as result
```
There are different aproaches to overcome this. But since every Symbol() call is guaranteed to return a unique Symbol we can use it to store actual result with guarantee, that it will never match any argument.

## Problem Added By

- [deveshidwivedi](https://github.com/deveshidwivedi)



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
