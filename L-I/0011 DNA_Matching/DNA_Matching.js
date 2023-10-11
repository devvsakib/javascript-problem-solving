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
