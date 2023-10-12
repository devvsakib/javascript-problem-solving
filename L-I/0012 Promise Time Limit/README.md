# Promise Time Limit
[LeetCode Problem]https://leetcode.com/problems/promise-time-limit/

Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

1. If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
2. If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

## Example 1
```
Input: 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 50
Output: {"rejected":"Time Limit Exceeded","time":50}
Explanation:
const limited = timeLimit(fn, t)
const start = performance.now()
let result;
try {
   const res = await limited(...inputs)
   result = {"resolved": res, "time": Math.floor(performance.now() - start)};
} catch (err) {
   result = {"rejected": err, "time": Math.floor(performance.now() - start)};
}
console.log(result) // Output

The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.
```

## Example 2:
```
Input: 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 150
Output: {"resolved":25,"time":100}
Explanation:
The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.
```

## Example 3:
```
Input: 
fn = async (a, b) => { 
  await new Promise(res => setTimeout(res, 120)); 
  return a + b; 
}
inputs = [5,10]
t = 150
Output: {"resolved":15,"time":120}
Explanation:
​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.
```

## Example 4:
```
Input: 
fn = async () => { 
  throw "Error";
}
inputs = []
t = 1000
Output: {"rejected":"Error","time":0}
Explanation:
The function immediately throws an error.
```

### Constraints:
```javascript
0 <= inputs.length <= 10
0 <= t <= 1000
fn returns a promise
```

## Approach 1:
1. Run a loop for every element nums[i] of the given array.
2. Inside this loop again run a for loop and traverse all the elements from j=i+1 to j=i+k and compare its value to the nums[i].
   (i) If nums[j]==nums[i] then return true. As we have found an element.
3. Finally when no duplicate element is found then return false before exiting the function.

## Approach 2:
1. Create a Hash Set for storing k previous elements.
2. Traverse for every element nums[i] of the given array in a loop.
   (i) Check if hash set already contains nums[i] or not. If nums[i] is present in the set ( i.e. duplicate element is present at a distance less than equal to k ), then return true. Else add nums[i] to the set.
   (ii) If the size of the set becomes greater than k then remove the last visited element (nums[i-k]) from the set.
3. Finally when no duplicate element is found then return false before exiting the function.

## Intuition:
We can use a combination of Promise, setTimeout, and async/await to implement the time-limited function. By setting a timeout using setTimeout, we can enforce the time limit and reject the promise if it exceeds the specified duration.

## Approach:
1. Create a wrapper function that takes the original function fn and the time limit t as parameters.
2. Within the wrapper function, return an async function that accepts any number of arguments using the spread operator ...args.
3. Inside the async function, create a new Promise to handle the asynchronous execution.
4. Use setTimeout to set a timer with the time limit t. If the timer expires before the promise is resolved, reject the promise with the string "Time Limit Exceeded".
5. Call the original function fn with the provided arguments ...args and await its completion.
6. If the function completes before the time limit, resolve the promise with the result.
7. Return the promise from the async function.

### Time Complexity: O(fn)
### Space Complexity: O(1)

## Problem Added By
- [himanshukoshti](https://github.com/himanshukoshti)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.