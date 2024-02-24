const arr = [1, 2, 3, 4];

for (const item of arr) {
  console.log(item);
}

// set
const set = new Set(["a", "b", "c", "d"]);

for (const value of set) {
  console.log(value);
}

// map
const map = new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
  [4, "d"],
]);

for (const [key, value] of map) {
  console.log(key, value);
}
