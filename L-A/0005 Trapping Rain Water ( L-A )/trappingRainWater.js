/**
 * @param {number[]} height - Array of heights.
 * @return {number} - Amount of water that can be trapped.
 */

const trap = function (height) {
  let ans = 0;
  const size = height.length;
  let leftMax = height[0];
  let rightMax = height[size - 1];
  const leftArr = new Array(size);
  leftArr[0] = height[0];
  const rightArr = new Array(size);
  rightArr[size - 1] = height[size - 1];

  // Calculate the maximum height to the left of each index and store it in the leftArr.
  for (let i = 1; i < size; i++) {
    leftMax = Math.max(leftMax, height[i]);
    leftArr[i] = leftMax;
  }

  // Calculate the maximum height to the right of each index and store it in the rightArr.
  for (let k = size - 2; k >= 0; k--) {
    rightMax = Math.max(rightMax, height[k]);
    rightArr[k] = rightMax;
  }

  // Calculate the amount of water that can be trapped at each index and add it to the answer.
  for (let j = 0; j < size; j++) {
    ans += Math.max(Math.min(leftArr[j], rightArr[j]) - height[j], 0);
  }

  return ans;
};
