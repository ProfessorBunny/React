selection_sort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    console.log(arr);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        console.log(arr[j], arr[min]);
        min = j;
      }
    }

    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
    console.log(`new: ${arr}`);
    console.log("one pass complete");
  }
  console.log(arr);
};

selection_sort([1, 4, 5, 2, 3]);
