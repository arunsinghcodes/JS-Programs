// In JS everythings is an object
//! ProtoType and ProtoType Inheritance

const p1 = {
  fname: "Arun",
  lname: "Singh",
  getFullName() {
    return `Hi ${this.fname} ${this.lname}`;
  },
};

console.log(p1.getFullName());

const p2 = Object.create(p1);

console.log("this is p1", p1);
console.log("this is p2", p2);

// const p1 = {
//   fname: "Arun",
//   lanme: "Singh",
//   __proto__: {},
// };

// p1.<property>
