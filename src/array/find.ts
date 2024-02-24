const users = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
  {
    id: 3,
    name: "c",
  },
];

const result = users.find((user) => user.id === 2);

console.log(result);
