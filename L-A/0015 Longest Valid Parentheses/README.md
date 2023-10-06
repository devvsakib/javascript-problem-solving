# Longest Valid Parentheses
[LeetCode Problem]https://leetcode.com/problems/longest-valid-parentheses/description/

Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

## Example 1
```
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
```

## Example 2:
```
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
```

## Example 3:
```
Input: s = ""
Output: 0
```

### Constraints:
```javascript
0 <= s.length <= 3 * 104
s[i] is '(', or ')'
```

## Approach:
One of the key things to realize about valid parentheses strings is that they're entirely self-satisfied, meaning that while you can have one substring that is entirely inside another, you can't have two substrings that only partially overlap.

This means that we can use a greedy O(N) time complexity solution to this problem without the need for any kind of backtracking. In fact, we should be able to use a very standard stack-based valid parentheses string algorithm with just three very minor modifications.

In a stadard valid parentheses string algorithm, we iterate through the string (S) and push the index (i) of any '(' to our stack. Whenever we find a ')', we match it with the last entry on the stack and pop said entry off. We know the string is not valid if we find a ')' while there are no '(' indexes in the stack with which to match it, and also if we have leftover '(' in the stack when we reach the end of S.

For this problem, we will need to add in a step that updates our answer (ans) when we close a parentheses pair. Since we stored the index of the '(' in our stack, we can easily find the difference between the ')' at i and the last entry in the stack, which should be the length of the valid substring which was just closed.

But here we run into a problem, because consecutive valid substrings can be grouped into a larger valid substring (ie, '()()' = 4). So instead of counting from the last stack entry, we should actually count from the second to last entry, to include any other valid closed substrings since the most recent '(' that will still remain after we pop the just-matched last stack entry off.

This, of course, brings us to the second and third changes. Since we're checking the second to last stack entry, what happens in the case of '()()' when you close the second valid substring yet there's only the one stack entry left at the time?

To avoid this issue, we can just wrap the entire string in another imaginary set of parentheses by starting with stack = [-1], indicating that there's an imaginary '(' just before the beginning of the string at i = 0.

The other issue is that we will want to continue even if the string up to i becomes invalid due to a ')' appearing when the stack is "empty", or in this case has only our imaginary index left. In that case, we can just effectively restart our stack by updating our imaginary '(' index (stack[0] = i) and continue on.

Then, once we reach the end of S, we can just return ans.

## Problem Added By

- [himanshukoshti](https://github.com/himanshukoshti)



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
