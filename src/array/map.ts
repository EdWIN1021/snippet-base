const arr = [1, 2, 3, 4];

const newArr = arr.map(
  (currentValue, currentIndex, entireArray) => (currentValue = 5)
);

console.log(newArr);
