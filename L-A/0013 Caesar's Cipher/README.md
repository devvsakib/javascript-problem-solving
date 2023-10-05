# Caesar's Cipher
[Edabit Problem](https://edabit.com/challenge/a33jdGXkaQRtK9ZTs) 

Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check ***Resources*** tab for more info) shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by *3, w, x, y* and *z* would map to *z, a, b* and *c*.

Create a function that takes a string *s* (text to be encrypted) and an integer *k* (the rotation factor). It should return an encrypted string.

## Example:
```javascript
caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb"

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

caesarCipher("A friend in need is a friend indeed", 20)
➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"
```

### Notes: All test input will be a valid ASCII string.

## By: arindal1
***[GitHub](https://github.com/arindal1)***
