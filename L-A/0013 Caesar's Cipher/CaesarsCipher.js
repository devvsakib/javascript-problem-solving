function caesarCipher(str, k) {
  // Helper function to shift a single character by k positions
  function shiftChar(char, k) {
    const isUpperCase = /[A-Z]/.test(char);
    const alphabetSize = 26;

    const baseCharCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
    const shiftedCharCode = ((char.charCodeAt(0) - baseCharCode + k) % alphabetSize + alphabetSize) % alphabetSize + baseCharCode;

    return String.fromCharCode(shiftedCharCode);
  }

  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (/[A-Za-z]/.test(char)) {
      result += shiftChar(char, k);
    } else {
      result += char; // Non-alphabetic characters remain unchanged
    }
  }

  return result;
}

// Examples
console.log(caesarCipher("middle-Outz", 2)); // ➞ "okffng-Qwvb"
console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)); // ➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
console.log(caesarCipher("A friend in need is a friend indeed", 20)); // ➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"
