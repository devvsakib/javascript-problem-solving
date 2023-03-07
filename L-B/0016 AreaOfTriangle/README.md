# Problem 15 (L-B) ~ Area Of Triangle

## Problem

This program takes lengths of three sides and displays area of triangle.

## Solution

```javascript
const side1 = 5; 
const side2 = 6; 
const side3 = 7; 
const perimeter = (side1 + side2 + side3)/2;
const area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);
```

## References

- [w3resource](https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-4.php)

## Problem Added By

- [GitHub](https://github.com/Shiva-Sai-ssb)

## Contributing

 Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

 Please make sure to update tests as appropriate.
 