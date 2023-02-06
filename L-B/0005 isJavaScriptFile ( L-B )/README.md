# 0005 isJavaScriptFile ( L-B )

## Problem

Write a function that returns an new array of true and false values based on the input array. The function should return true if the corresponding element is a JavaScript file.

## Test Cases

- isJavaScriptFile(['L-B.js', 'L-B.css', 'L-B.html', 'L-B.js']); // [true, false, false, true]
- isJavaScriptFile(['L-B.js', 'L-B.js', 'L-B.js', 'L-B.js']); // [true, true, true, true]
- isJavaScriptFile(['L-B.css', 'L-B.css', 'L-B.css', 'L-B.css']); // [false, false, false, false]
 
## Solution

```javascript
function isJavaScript(file) {
    let trueName = [];
    for (const ele of file) {
        if (ele.endsWith(".js")){
            trueName.push(true)
        }
        else{
            trueName.push(false)
        }
    }
    return trueName;
}

const fileInputName = ["javascriptProject.js", "app.js","js.png","clock.java", "image.js"];
const fileName = isJavaScript(fileInputName);
```

## How it works

- The function takes an array as a parameter.
- It creates a variable called trueName and assigns it a value of an empty array.
- It creates a for loop that iterates through the array.
- It checks if the element ends with ".js".
- If it does, it pushes true to the trueName array.
- If it doesn't, it pushes false to the trueName array.
- It returns the value of trueName.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/For_loop)
- [GeeksforGeeks](https://www.geeksforgeeks.org/for-loop-in-javascript/)
- [StackOverflow](https://stackoverflow.com/questions/1669190/javascript-min-max-array-values)

## Problem Added By

- [GitHub](https://www.github.com/devvsakib)
- [LinkedIn](https://www.linkedin.com/in/devvsakib)
- [Twitter](https://twitter.com/devvsakib)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.