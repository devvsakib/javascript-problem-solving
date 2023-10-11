function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function isPalindrome(num) {
  const numStr = num.toString();
  const reversedStr = numStr.split("").reverse().join("");
  return numStr === reversedStr;
}

function largestPrimePalindrome(n) {
  for (let i = n; i >= 2; i--) {
    if (isPrime(i) && isPalindrome(i)) {
      return i;
    }
  }
  return null; // No prime palindrome found in the range
}

// Test cases
console.log(largestPrimePalindrome(100)); // 7
console.log(largestPrimePalindrome(50)); // 7
console.log(largestPrimePalindrome(10)); // 7
