/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const isVowel = (c) => {
    if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') return true;
    return false;
}

var vowelStrings = function(words, left, right) {
    let ans = 0;
    for(let i = left; i <= right; i++) {
      let s = words[i];
      if(isVowel(s[0]) && isVowel(s[s.length - 1])) ans++;
    }
    return ans;
}