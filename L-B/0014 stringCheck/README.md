## You are given an array with two strings. Write a function to check all the letters present in the second string is also present in the first string,ignoring the case.The function should return a boolean.
### eg: stringCheck(["React","cat"])  should return true
###     stringCheck(["tab","tan"])  should return false

# Explanation
## first create a function that takes an array as argument.
## create a variables 'flag' with a value of zero.
## create two variables string1 and string2 from the first and second element of the array.
### eg: let myArray=["cat","dog"]
### let string1=myArray[0] that is "cat"
### let string2=myArray[1] that is "dog"
### Loop through each letters of string2 with a for loop and check the letters present in string1 by a ".includes()" function in javascript.If any of the letter in string2 is not present in string1   we have to add 1 to our  'flag' variable.Finally we use if condition to check the flag variable.If flag is zero that means all the letters of the string2 are present in string1, and return true. if flag is greater than zero , that means some letters are not present, so we retun false.

## Problem added by
### Fais Edathil [Git Hub](https://github.com/E-fais)

