const obj = {
  name: "Arun Kumar Singh",
  print() {
    console.log(this.name);
  },
};

const fn = obj.print();

