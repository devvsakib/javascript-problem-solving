function fibonacci(n) {
    let a = 0, b = 1, result = [];
    for (let i = 0; i < n; i++) {
      result.push(a);
      [a, b] = [b, a + b];
    }
    return result;
  }
  
  // Test Cases
  console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
  console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
  