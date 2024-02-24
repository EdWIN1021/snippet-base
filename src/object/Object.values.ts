var person = {
  firstName: "Edwin",
  lastName: "Shi",
  age: 27,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

var myArray = Object.values(person);
console.log(myArray);
