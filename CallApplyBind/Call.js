let name = {
  firstName: "Arun",
  lastName: "Singh",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

let nameTwo = {
    firstName: "Smii",
    lastName: "Rani",
}

name.printFullName();

name.printFullName.call(nameTwo);

// this is called th function borrowing 
