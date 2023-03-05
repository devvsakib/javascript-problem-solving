const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

const checkVowelOrConsonant = (letter) => {
  if (vowels.includes(letter)) {
    return `${letter} is a VOWEL`;
  } else {
    return `${letter} is a CONSONANT`;
  }
};

module.exports = checkVowelOrConsonant;
