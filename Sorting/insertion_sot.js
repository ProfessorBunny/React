insertion_sort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current_val = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > current_val; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = current_val;
    console.log(`new: ${arr}`);
    console.log("One pass Complete");
  }

  console.log(arr);
};

insertion_sort([5, 2, 3, 1, 4]);
