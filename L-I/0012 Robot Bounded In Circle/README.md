# Problem

- On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that:

The north direction is the positive direction of the y-axis.
The south direction is the negative direction of the y-axis.
The east direction is the positive direction of the x-axis.
The west direction is the negative direction of the x-axis.
The robot can receive one of three instructions:

"G": go straight 1 unit.
"L": turn 90 degrees to the left (i.e., anti-clockwise direction).
"R": turn 90 degrees to the right (i.e., clockwise direction).
The robot performs the instructions given in order, and repeats them forever.

- Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

# Solution

```javascript
var isRobotBounded = function (ins) {
  let x = 0,
    y = 0,
    i = 0,
    d = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

  for (let j = 0; j < ins.length; ++j) {
    if (ins.charAt(j) === "R") i = (i + 1) % 4;
    else if (ins.charAt(j) === "L")
      i = (i + 3) % 4; // one left turn = 3 right turn
    else {
      x += d[i][0];
      y += d[i][1];
    }
  }

  return (x === 0 && y === 0) || i > 0;
};
```

## how it works

1. creating the function using variable expression
2. Function get the instructions as parameter
3. Initialise the variables x, y are the 2D position, i is the direction and d is the possible solution to move.
4. Then run the loop using for loop through entire characters to check the cycle move.
5. if charcter is as R or L only the direction change. Other wise same direction.
6. finally after the loop finishes, there are conditions to check to give the result.
7. if last and current position (0,0) , or i > 0

## references

[Leetcode][https://leetcode.com/problems/robot-bounded-in-circle/description/?envType=study-plan-v2&envId=programming-skills]
