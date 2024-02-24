// used to create a new object, with an existing object as its prototype

let obj1 = { first: "edwin", age: 100 };

// create an empty object with last
let obj2 = Object.create(obj1, {
  last: {
    value: "shi",
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

obj2.first = "yang";
obj2.age = 1000;

console.log(obj2);
