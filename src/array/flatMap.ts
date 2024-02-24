const arr = [1, [2, 3], 4];

console.log(
  arr.flatMap((item) =>
    Array.isArray(item) && item[0] === 2 && item[1] === 3 ? [2, 3] : [item]
  )
);
