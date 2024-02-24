var person = {
  firstName: "Edwin",
  lastName: "Shi",
  language: "CH",
};

Object.defineProperty(person, "language", { enumerable: false });

console.log(Object.getOwnPropertyNames(person));
