function calculateTip(totalCost, tipPercentage) {
  // Calculate the tip amount by multiplying totalCost by tipPercentage divided by 100
  const tipAmount = (totalCost * tipPercentage) / 100;
  return tipAmount;
}

// Test cases
console.log(calculateTip(50, 15)); // 7.5
console.log(calculateTip(75, 20)); // 15
