# SVG Path Data Parser
[Edabit Problem](https://edabit.com/challenge/ysMrKPGby3FXiYtQn)

A `<path>` element can usually be found inside an `<svg>` element and has an attribute **d** that represents the definition of the outline of a shape.

A brief summary about this attribute:

It contains commands (letters) and coordinates (numbers)
All instructions are expressed as one character (e.g., a moveto is expressed as an **M**).
Superfluous white space and separators such as commas can be eliminated (e.g., M 10 10 L 20 20 contains unnecessary spaces and could be expressed more compactly as `M10 10L20 20`).
The command letter can be eliminated on subsequent commands if the same command is used multiple times in a row (e.g., you can drop the second L in `M 10 20 L 20 10 L -10 -20` and use `M 10 20 L 20 10 -10 -20` instead).

Your job is to build a parser that will convert this string in an array of commands, where each array element is an object with the `command` letter and an array of `parameters`.

This summary is incomplete but should get you started, for more information please refer to the W3C specification found in the resources tab.

## Examples

```javascript
pathDataParser("") ➞ []

pathDataParser("M 0 0") ➞ [{command: 'M', parameters: [0, 0]}]

pathDataParser("M 1 1.5 L 0 1.5 0 0.5 1 0.5 0.5 0 0 0.5 1 1.5 1 0.5 0 1.5" ➞ [
  {command: "M", parameters: [1, 1.5]},
  {command: "L", parameters: [0, 1.5, 0, 0.5, 1, 0.5, 0.5, 0, 0, 0.5, 1, 1.5, 1, 0.5, 0, 1.5]}
]

pathDataParser("M 0,1 h 1 v -1 h 1 v 1 h 1 C 2,1 3,3 1.5,3 C 0,3 1,1 0,1 z" ➞ [
  {command: "M", parameters: [0, 1]},
  {command: "h", parameters: [1]},
  {command: "v", parameters: [-1]},
  {command: "h", parameters: [1]},
  {command: "v", parameters: [1]},
  {command: "h", parameters: [1]},
  {command: "C", parameters: [2, 1, 3, 3, 1.5, 3]},
  {command: "C", parameters: [0, 3, 1, 1, 0, 1]},
  {command: "z", parameters: []}
]
```

## Notes:

- Return an empty array if no commands are found (example #1)
- The z (or Z) command is the only one without parameters, in this case return an empty array (see last command of example #4)
- The parameters array contains numbers, not strings, so you'll have to convert them
- Sometimes numbers can be very compressed to save space, let's look at some examples that might trip you up:
  - Decimal numbers can start with a dot: .4 is the same as 0.4
  - If a negative number comes after another number, the space is optional: 0-4 is equal to 0 -4
  - Multiple decimal numbers in a row can be very tricky, remember that a number CAN NOT have more than 1 dot, so this: 1.2.34 is actually 2 different numbers: 1.2 and 0.34
- Some examples have commas, some do not, some have multiline strings, some are a single line, remember to take into account all valid cases! Check out the tests tab to find out more.

## By: arindal1
***[GitHub](https://github.com/arindal1)***
