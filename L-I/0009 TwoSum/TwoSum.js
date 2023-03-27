const TwoSum = (nums, target) => {
  numToIndex = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in numToIndex)
      return [numToIndex[target - nums[i]], i];

    numToIndex[nums[i]] = i;
  }

  return [];
};

nums = [3, 2, 4];
target = 6;

nums1 = [2, 7, 11, 15];
target1 = 9;

nums2 = [3, 3];
target2 = 6;

console.log(TwoSum(nums, target));
console.log(TwoSum(nums1, target1));
console.log(TwoSum(nums2, target2));
