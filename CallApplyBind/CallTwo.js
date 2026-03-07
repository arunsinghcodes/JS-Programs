let name = {
  firstName: "Arun",
  lastName: "Singh",
};

let printFullName = function (hometown, state) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown + 
    "," + state
  );
};

let nameTwo = {
  firstName: "Smii",
  lastName: "Rani",
};

printFullName.call(name, "Dhanbad", "Jharkhnad"); // this is the list of argument pass 

printFullName.apply(nameTwo, ["Rohtak", "Hariyana"]); // apply is the basic diffrence is args pass into to the from of array of arugment


// bind method look smilar to the call methods but it return copy of the functions


let myPrintName = printFullName.bind(name, "Dhanbad", "Jharkhnad");

myPrintName();

// console.log("Bind methods", myPrintName())
