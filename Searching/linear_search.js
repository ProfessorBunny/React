linearSearch = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }
  return -1;
};

let value = linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 99);

console.log(value);
