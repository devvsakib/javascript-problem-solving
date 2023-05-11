// ----------------------------------------------------------------------------- code begins now!
const readline = require("readline");

function kadaneAlgorithm(arr) {
  if (!arr) return 0;
  let sum = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    max += arr[i];

    if (max < 0) {
      max = 0;
    }

    if (sum < max) {
      sum = max;
    }
  }

  return sum;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.question("Enter number of elements in the array: ", function (n) {
  let count = 0;

  function getArrayInput() {
    if (count < n) {
      rl.question("Enter element in array: ", function (input) {
        arr.push(Number(input));
        count++;
        getArrayInput();
      });
    } else {
      let ans = kadaneAlgorithm(arr);
      console.log(ans);
      rl.close();
    }
  }

  getArrayInput();
});
