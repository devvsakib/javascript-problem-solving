const RemoveDuplicates = (nums) => {
  i = 1;

  size = nums.length;

  while (i < size) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      size -= 1;
    } else i += 1;
  }

  return nums;
};

nums = [1, 1, 1, 2, 2, 3, 3, 4, 6, 7, 8, 8, 9];

console.log(RemoveDuplicates(nums));
