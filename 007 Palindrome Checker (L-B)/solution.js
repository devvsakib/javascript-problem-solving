function isPalindrome(str) {
    str = str.toLowerCase();
    let i = 0, j = str.length - 1;
    while (i < j) {
      if (str[i] !== str[j]) return false;
      i++;
      j--;
    }
    return true;
  }
  
  // Test Cases
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello"));   // false
  