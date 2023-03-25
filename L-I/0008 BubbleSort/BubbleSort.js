const BubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

arr = [0, 4, 2, 3, 7, 3, 6, 2, 9, 10, 2, 6];
arrOne = [45, 32, 12, 67, 86, 92, 29, 24, 53, 1, 6, 32, 56];

BubbleSort(arr);
BubbleSort(arrOne);

console.log(arr);
console.log(arrOne);
