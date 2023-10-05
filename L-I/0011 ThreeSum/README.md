# 0011 ThreeSum ( L-I )

## Problem
Three Sum (3SUM)

Given an array nums of n integers, are there elements &nbsp;`a, b, c` &nbsp; in nums such that &nbsp; `a + b + c = target`&nbsp;? Find all unique triplets in the array which gives the sum is equal to &nbsp;`target` &nbsp;.



## Solution

```javascript
// 1. Brute Force Solution
const threeSum_brute_Force = (nums, target) => {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === target) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return result;
}

// 2. Using a hash table
const threeSum_hash_table = (nums, target) => {
    let result = [];
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const complement = target - (nums[i] + nums[j]);
            if (complement in hash) {
                result.push([nums[i], nums[j], complement]);
            } else {
                hash[nums[j]] = true;
            }
        }
    }
   
    return result;
}

// 3. Two Pointer Technique
const threeSum_two_pointer = (nums, target) => {
    let result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}
```

## How it works
### 1. Brute Force Steps

1. Initialize an empty array result to store the unique triplets that sum to the target value.

2. Use three nested loops to iterate through the elements of the nums array. The outermost loop (indexed by i) iterates from the first element to the second-to-last element.

3. The second loop (indexed by j) iterates from the element after the i-th element to the second-to-last element.

4. The innermost loop (indexed by k) iterates from the element after the j-th element to the last element of the nums array.

5. Within the innermost loop, check if the sum of the elements at indices i, j, and k is equal to the target value.

6. If the sum is equal to the target, create a triplet by selecting the elements at these indices (nums[i], nums[j], nums[k]) and push it into the result array.

7. Continue iterating through the loops to find all such triplets.

8. Finally, return the result array containing all unique triplets that sum to the target value.

### 2. Hash Table Steps

1. Initialize an empty array result to store the unique triplets.
2. Create an empty hash table hash to store the values encountered in the inner loop.
3. Use two nested loops to iterate through the nums array.
4. Calculate the complement by subtracting the sum of nums[i] and nums[j] from the target.
5. Check if the complement exists in the hash table.
6. If found, add [nums[i], nums[j], complement] to the result array.
7. If not found, store nums[j] in the hash table.
8. Return the result array containing all unique triplets that sum to the target value.

### 3. Two Pointer Technique Steps

1. Sort the nums array in ascending order.
2. Iterate through the sorted array with a loop, selecting an element nums[i] as the first element of a potential triplet.
3. Use two pointers, left and right, to search for a pair of elements that sum up to the complement of nums[i] (i.e., target - nums[i]).
4. If found, add [nums[i], nums[left], nums[right]] to the result array, and move both pointers while skipping duplicates.
5. Continue the iteration until all unique triplets that sum to the target are found.
6. Return the result array containing all unique triplets.


## References
- [Wikipedia](https://en.wikipedia.org/wiki/3SUM)
- [Leetcode](https://leetcode.com/problems/3sum/)


## Problem Added By
- [PortFolio](https://femil-savaliya.netlify.app)
- [GitHub](https://www.github.com/Femil32) 
- [LinkedIn](https://www.linkedin.com/in/femil-savaliya)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.