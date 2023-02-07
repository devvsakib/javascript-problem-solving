# 0007 RightTriangleStarPattern ( L-B )

## Problem

Create a function that accept size parameter in number and log right triangle star pattern.

### Example

#### Size 5

```
*
**
***
****
*****
```

#### Size 4

```
*
**
***
****
```

#### Size 3

```
*
**
***
```

## Solution

```javascript
const RightTriangleStarPattern = size => {
	for (let y = 0; y < size; y++) {
		let temp = ''

		for (let x = 0; x <= y; x++) {
			temp += '*'
		}

		console.log(temp)
	}
}
```

## References

-   [For Loop MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
-   [Loop MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
-   [Nested Loop FreeCodeCamp](https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/)

## Problem Added By

-   [GitHub](https://www.github.com/kennarddh)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
