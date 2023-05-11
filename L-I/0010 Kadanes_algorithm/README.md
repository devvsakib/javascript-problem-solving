Name : Aneesh
Github username : 007aneesh
Repository name : data-structures-and-algorithms
Problem : Kadane's algorithm in Javascript
Issue Number : #1182
Problem statement : Given an integer array nums, find the subarray with the largest sum, and return its sum.

Sample testcases:

Testcase 1 -->

Input: number of elements in array = 9
nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6

Testcase 2 -->
Input: number of elements in array
nums = [5,4,-1,7,8]
Output: 23

Time Complexity = O(n)
Space Complexity = O(n)

Explanation:
This code asks the user to enter the number of elements in an array,
and then prompts them to enter each element of the array one at a time.
Once the array is complete, the code applies the Kadane's algorithm to
find the maximum sum of any subarray within the array, and then prints
the result to the console.

Kadane's algorithm is a way of finding the maximum sum of a contiguous subarray within an array,
and it does so by keeping track of the maximum sum seen so far as it iterates through the array.
At each step, it adds the current element to a running sum, and if that sum becomes negative,
it resets the running sum to zero. If the running sum is ever greater than the maximum seen so far,
it updates the maximum. Finally, it returns the maximum sum.

