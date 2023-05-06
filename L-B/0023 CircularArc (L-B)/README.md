# CircularArc

## Problem
Write a function that takes a radius 'r' and a angle 'theta' in DEGREES and returns the length of the circular arc.

## Solution

```javascript
function CircularArc(r, theta) {
  let thetaRad = theta * (Math.PI / 180); 
  return thetaRad * r;
}
```

## How it works
- First we convert the angle from degrees to radians.
- Then we calculate the arc based on the angle in radians using the arc formula.


## References
- [Wikipedia](https://en.wikipedia.org/wiki/Circular_arc)
- [GoLinuxCloud](https://www.golinuxcloud.com/mathtoradians-javascript/)

## Problem Added By
Same as reference, use your any social links
- [GitHub](https://github.com/paternostrox) 
- [LinkedIn](https://www.linkedin.com/in/paternostrox)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.