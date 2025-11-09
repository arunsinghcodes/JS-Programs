// create the week calender with JS

let day = "Tuesday";

switch (day) {
  case "Tuesday":
    console.log("Today, is Tuesday");
    break;
  case "Moday":
    console.log("Today is Monday");
    break;
  default:
    console.log("Invaild Input");
    break;
}

// Here is the revision of the how switch statements works- this is conditioanl statement
// let's build the grading system  for the school results and this is function

let resultsFunction = (marks) => {
  console.log(marks);
  switch (true) {
    case (marks >= 1 && marks <= 10):
      console.log("You are fail");
      break;
    case (marks >= 11 && marks <= 20):
      console.log("You are fail");
      break;
    case (marks >= 21 && marks <= 30):
      console.log("You are fail");
      break;
    case (marks >= 31 && marks <= 40):
      console.log("You are pass");
      break;
    case (marks >= 41 && marks <= 40):
      console.log("You are pass");
      break;
    case (marks >= 51 && marks <= 60):
      console.log("You are below average");
      break;
    case (marks >= 61 && marks <= 70):
      console.log("You are average");
      break;
    case (marks >= 71 && marks <= 80):
      console.log("You are above average");
      break;
    case (marks >= 81 && marks <= 90):
      console.log("You are Excellent");
      break;
    case (marks >= 91 && marks <= 100):
      console.log("You are Outstanding");
      break;
    default:
      console.log("Invaild Input");
  }
};

let outputResult = resultsFunction(101);

console.log(outputResult);
