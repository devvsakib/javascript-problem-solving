# Two-dimensional array(L-B)

## Problem
Write a program to construct a two-dimensional array using integer values.

## Solution

```javascript
// Create one dimensional array
var arr = new Array(2);
    
document.write("Creating 2D array <br>");
    
// Loop to create 2D array using 1D array
for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(2);
}
    
var h = 0;
    
// Loop to initialize 2D array elements.
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
        arr[i][j] = h++;
    }
}
    
// Loop to display the elements of 2D array. 
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++)    {
        document.write(arr[i][j] + " ");
    }
    document.write("<br>");
}
```

## How it works
- Before you learn how to create 2D arrays in JavaScript, let’s first learn how to access elements in 2D arrays.

- You can access the elements of a two-dimensional array using two indices, one for the row and one for the column. Suppose you have the following two-dimensional array:
```
let MathScore = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];
```
- The above is a jagged array in which each element holds the student's name, test score, exam score, and grade. You can access specific elements using the row and column index as seen in the syntax below:

```
arrayName[rowIndex][columnIndex]
```
- To better understand this, let’s convert the two-dimensional array above to a table using ```console.table(arrayName).```

- You will get an output like this, showing the row and column index. Remember that arrays are zero-indexed, meaning items are referenced from 0, not 1.

## References
- [stackoverflow](https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript)
- [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-create-two-dimensional-array-in-javascript/)
- [freecodecamp](https://www.freecodecamp.org/news/javascript-2d-arrays/#:~:text=let%20arr%20%3D%20%5B%5D%3B%20let,first%20loop%20through%20the%20rows.)


## Problem Added By
- [GitHub](https://www.github.com/rithik14) 



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.