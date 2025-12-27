# 0012 lengthConverter ( L-I )

## Problem
Create a function that converts a given length value from one unit to another.
The function should:
- Accept a numeric length
- Accept a fromUnit and toUnit
- Support common metric and imperial units
- Return the converted value rounded to 5 decimal places
- Throw an error if an invalid unit is provided

## Supported Units
- meters
- kilometers
- centimeters
- millimeters
- inches
- feet
- yards
- miles

## Solution
```js
function lengthConverter(length, fromUnit, toUnit) {
    const units = {
        "meters": 1,
        "kilometers": 1000,
        "centimeters": 0.01,
        "millimeters": 0.001,
        "inches": 0.0254,
        "feet": 0.3048,
        "yards": 0.9144,
        "miles": 1609.34
    };

    if (!units[fromUnit] || !units[toUnit]) {
        throw new Error("Invalid unit");
    }
    const meters = length * units[fromUnit];
    console.log((meters / units[toUnit]).toFixed(3));
    return (meters / units[toUnit]).toFixed(3);
}
```

## Test Cases
```js
removeDuplicates([2, 4, 8, 4, 2, 6, 9, 2, 6, 8, 10]);
// Output: [2, 4, 8, 6, 9, 10]

removeDuplicates([1, 1, 1, 4, 0, 6, -2, 2, 6, 7, 10]);
// Output: [1, 4, 0,  6, -2, 2, 7, 10]

removeDuplicates("zoom");
// Output: "zom"

removeDuplicates("hello world");
// Output: "helo wrd"
```

## How it works
- Define a units object where each unit is mapped to its value in meters
- Validate both fromUnit and toUnit
- The input length is first converted into meters
- Then we convert meters into the target unit
- The result is rounded to 5 decimal places using toFixed(5)
- Finally, the converted value is returned

## References
- [Wikipedia – Unit conversion](https://en.wikipedia.org/wiki/Unit_conversion)
- [MDN – JavaScript Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)


## Problem Added By
- [GitHub](https://github.com/rimsha-shoukat)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.