const users = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
];

const result = users.findIndex((user) => user.id === 2);

console.log(result);
