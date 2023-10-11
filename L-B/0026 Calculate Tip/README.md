# 0026 Calculate Tip ( L-B )

## Problem

You are at a restaurant, and you want to calculate the tip for your meal. Write a JavaScript function called **calculateTip** that takes two inputs: the total cost of the meal and the tip percentage.Your function should calculate the tip amount and return it.

**Example**

```
If the total cost is $50 and the tip percentage is 15%, the function should return $7.5 because 15% of $50 is $7.5.

If the total cost is $75 and the tip percentage is 20%, the function should return $15 because 20% of $75 is $15.
```

- **_You can assume that the tip percentage is provided as a whole number (e.g., 15 for 15%) and that the total cost is a positive number._**

**Here's an example of how the function should work:**

```javascript
console.log(calculateTip(50, 15)); // 7.5
console.log(calculateTip(75, 20)); // 15
```

## Solutions

```javascript
function calculateTip(totalCost, tipPercentage) {
  // Calculate the tip amount by multiplying totalCost by tipPercentage divided by 100
  const tipAmount = (totalCost * tipPercentage) / 100;
  return tipAmount;
}

// Test cases
console.log(calculateTip(50, 15)); // 7.5
console.log(calculateTip(75, 20)); // 15
```

## How it works

1. We define a function calculateTip that takes two parameters: totalCost (the total cost of the meal) and tipPercentage (the percentage of the tip to be calculated).

2. Inside the function, we calculate the tip amount by multiplying totalCost by tipPercentage divided by 100. This is because tip percentages are usually provided as whole numbers (e.g., 15 for 15%).

## References

- [ChatGPT](https://chat.openai.com/)

## Problem Added By

- [Tipchan](https://github.com/tsongtheng)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
