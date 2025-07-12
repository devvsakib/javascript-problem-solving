function findLargest(arr) {
    return Math.max(...arr);
  }
  
  // Test Cases
  console.log(findLargest([3, 7, 2, 9, 5]));      // 9
  console.log(findLargest([10, 200, 30, 80]));    // 200
  