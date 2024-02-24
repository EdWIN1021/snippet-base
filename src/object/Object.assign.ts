/*
- shallow merge:
- 对象中只有一级属性，没有二级属性的时候，此方法为深拷贝，但是对象中有对象的时候，此方法，在二级属性以后就是浅拷贝
*/

const p1 = {
  firstName: "yang",
  lastName: "shi",
  skills: ["react", "next"],
};


const p2 = Object.assign({}, p1);
p2.firstName = "edwin";

p2.skills.push("javascript", "css");

console.log(p1);
console.log(p2);
