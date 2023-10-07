# 0011 DNA_Matching ( L-I )

## Problem

You are given two DNA sequences as strings, representing the genetic code of two individuals. Each DNA sequence consists of a series of characters, where each character can be one of four options: 'A' (adenine), 'C' (cytosine), 'G' (guanine), or 'T' (thymine).

Write a JavaScript function called dnaMatch that takes these two DNA sequences as input and returns true if they are a match and false otherwise. Two DNA sequences are considered a match if they have the same characters in the same order.

**Example**

```
If the input DNA sequences are "ACGT" and "ACGT", the function should return   true   because they are an exact match.
If the input DNA sequences are "ACGT" and "ACTG", the function should return   false   because the order of characters is different.
If the input DNA sequences are "AACT" and "AACC", the function should return   true   because some characters do not match.
```

**Here's an example of how the function should work:**

```javascript
console.log(dnaMatch("ACGT", "ACGT")); // true
console.log(dnaMatch("ACGT", "ACTG")); // false
console.log(dnaMatch("AACT", "AACC")); // false
```

## Solutions

```javascript
function dnaMatch(dna1, dna2) {
  // Check if the lengths of the two DNA sequences are different
  if (dna1.length !== dna2.length) {
    return false; // Different lengths, not a match
  }

  // Iterate through each character of the DNA sequences
  for (let i = 0; i < dna1.length; i++) {
    // Compare characters at the current position
    if (dna1[i] !== dna2[i]) {
      return false; // Characters don't match, not a match
    }
  }

  // If we reach this point, all characters match, so it's a match
  return true;
}

// Test cases
console.log(dnaMatch("ACGT", "ACGT")); // true
console.log(dnaMatch("ACGT", "ACTG")); // false
console.log(dnaMatch("AACT", "AACC")); // false
```

## How it works

1. The `dnaMatch` function takes two input arguments: `dna1` and `dna2`, which are the two DNA sequences we want to compare.

2. First, it checks if the lengths of `dna1` and `dna2` are different using the `if (dna1.length !== dna2.length)` conditional statement. If they have different lengths, the function immediately returns `false` because sequences of different lengths cannot be a match.

3. If the lengths are the same, the function proceeds to compare the characters of the two DNA sequences.

4. It enters a `for` loop that iterates through the characters of the sequences. The loop is controlled by the variable `i`, which starts at 0 and goes up to `dna1.length - 1`. This loop allows us to compare characters at the same position in both sequences.

5. Inside the loop, the code compares the characters at the current position `i` using the conditional statement `if (dna1[i] !== dna2[i])`. If the characters at position `i` are not the same in both sequences, the function immediately returns `false` because it found a mismatch.

6. If the loop completes without finding any mismatches, meaning it has compared all characters in both sequences, the function returns `true`. This indicates that the two DNA sequences are identical and, therefore, a match.

## References

- [ChatGPT](https://chat.openai.com/)

## Problem Added By

- [Tipchan](https://github.com/tsongtheng)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
