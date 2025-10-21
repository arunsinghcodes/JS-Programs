// Simple Password Checker (Fixed Attempts)

const correctPassword = "arun123"; // the correct password
let attempts = 3; // total attempts allowed

while (attempts > 0) {
  const userInput = prompt("Enter your password:");

  if (userInput === correctPassword) {
    console.log("✅ Access granted! Welcome!");
    break;
  } else {
    attempts--;
    if (attempts > 0) {
      console.log(
        `❌ Incorrect password. You have ${attempts} attempt(s) left.`
      );
    } else {
      console.log("🚫 No attempts left. Access denied!");
    }
  }
}
