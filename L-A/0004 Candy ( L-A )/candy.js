function candy(ratings) {
  const candies = new Array(ratings.length).fill(1); // initialize candies array with 1 for each child
  let sum = candies.reduce((acc, val) => acc + val, 0); // sum up initial candies

  // update candies for increasing ratings from left to right
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
      sum += candies[i] - 1; // add the extra candies used to the sum
    }
  }

  // update candies for decreasing ratings from right to left
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1;
      sum += candies[i] - 1; // add the extra candies used to the sum
    }
  }

  return sum;
}

// We can test the function with some sample inputs
console.log(candy([1,0,2]));
console.log(candy([1,2,2]));
console.log(candy([1,3,4,5,2]));