# 0004 Candy ( L-A )

## Problem

There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:
- Each child must have at least one candy.
- Children with a higher rating get more candies than their neighbors.

Return the minimum number of candies you need to have to distribute the candies to the children.

## Test Case

```javascript
Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
```

## Solution

```javascript
var candy = function(ratings) {
  const candies = ratings.map(() => 1);
  const len = ratings.length;
  if (len <= 1) return len;

  for (let index = 1; index < len; index++) {
    if (ratings[index] > ratings[index-1]) {
      candies[index] = candies[index-1] + 1;
    }
  }

  let sum = candies[len-1];
  for (let index = len-2; index >= 0; index--) {
    if (ratings[index] > ratings[index+1] && candies[index] <= candies[index+1]) {
      candies[index] = candies[index+1] + 1;
    }
    sum += candies[index];
  }

  return sum;
};
```

## How it works

- Given an array of integers representing ratings of candy, the goal is to distribute minimum candies among children such that a child with a higher rating gets more candies than their neighbor with a lower rating.
- The code first initializes a new array called `candies` with the same length as the input `ratings` array, and fills it with ones. This means that initially, each child will receive at least one candy.
- Next, the code checks if the input `ratings` array has a length of 1 or less, in which case the function simply returns the length of the array.
- Then, the code loops through the input `ratings` array, starting from the second element, and compares each element to the previous element. If the current element has a higher rating than the previous element, the corresponding element in the `candies` array is updated to be one more than the previous element's value. This ensures that children with higher ratings receive more candies than their neighbors with lower ratings.
- After that, the code loops through the `candies` array again, this time starting from the second-to-last element and going backwards. For each element, the code checks if it has a higher rating than its next neighbor and if its current number of candies is less than or equal to its next neighbor's number of candies. If both conditions are true, the current element's number of candies is updated to be one more than its next neighbor's number of candies. This makes sure that the distribution of candies is optimal and the minimum number of candies are used.
- Finally, the code calculates the total number of candies distributed by summing up all the elements in the `candies` array and returns the sum.

## References

- [LeetCode](https://leetcode.com/problems/candy/)

## Problem Added By

- [Haris](https://github.com/harisdev-netizen)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
