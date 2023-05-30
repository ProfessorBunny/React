bubbleSort = (arr) => {
  let noSwaps = true;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        noSwaps = false;
      }
    }
    console.log("One pass Complete");
    if (noSwaps) break;
  }
  console.log(arr);
};
bubbleSort([4, 35, -4, 1, 12, 5, 22]);
// bubble_sort([5, 1, 2, 3, 4]);
