// splice(start, deleteCount, item1, item2, /* …, */ itemN)

const arr = ["a", "b", "c", "d", "e", "f", "g"];

// console.log(arr.splice(2));
// console.log(arr.splice(-1));

console.log(arr.splice(2, 4));
console.log(arr);

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months);
