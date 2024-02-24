const arr = [1, 2, 3, 4];

const newArr = arr.reduce(
  (accumulator, currentValue, currentIndex, entireArray) =>
    accumulator + currentValue,
  10
);

console.log(newArr);
