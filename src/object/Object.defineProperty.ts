var person = {
  firstName: "Edwin",
  lastName: "Shi",
  language: "CH",
};

// Change a property
Object.defineProperty(person, "language", { value: "EN" });

//add a property
Object.defineProperty(person, "age", { value: 200 });

//add a getter
Object.defineProperty(person, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
});

Object.defineProperty(person, "language", { writable: false });
Object.defineProperty(person, "language", { enumerable: true });
