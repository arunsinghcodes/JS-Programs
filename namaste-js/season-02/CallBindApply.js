// We can use call  apply bind methods for the sharing the methods by using the this keywords

const student1 = {
  name: "Arun",
  printName: function (hometown, profession) {
    console.log(
      `"Hi, ${this.name}, I am from ${hometown}, and I am ${profession} `
    );
  },
};

const student2 = {
  name: "Smi",
};

student1.printName("Delhi", "Lawyer");

student1.printName.call(student2, "Jharkhand", "Software Engineer");
student1.printName.apply(student2, ["Jharkhand", "Software Engineer"]);

let bindValue = student1.printName.bind(
  student2,
  "Jharkhand",
  "Software Engineer"
);
console.log("BindValues");

bindValue();
