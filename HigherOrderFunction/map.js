const arr = [1, 2, 3, 4, 5, 6, 7];

// const dobuleVale = arr.map((item) => 2 * item);

const ThripleValue = arr.map((item, index, men) => {
  // console.log(item)
  // console.log(index);
  // console.log(men);
  return item;
});

console.log(ThripleValue);

// EX:1 Mark the lat item -> Imgine you're rendering the a menu and wante to style the last item differently.

const menu = ["Home", "About", "Services", "Contact"];

const result = menu.map((item, index, array) => {
  return {
    lable: item,
    isLast: index === array.length - 1,
  };
});

console.log(result);

// Ex: 2 -> Add "Position" info (ranking/leaderboard)

const scores = [1, 99, 95, 88, 76, 60];

const ranked = scores.map((score, index, array) => {
  return {
    score,
    position: index + 1,
    totalPlayers: array.length,
  };
});

console.log(ranked);

// Ex: 3 - Compare with previous value

const temperatures = [30, 32, 35, 33];

const trend = temperatures.map((temp, index, array) =>{
    if(index === 0) return  "N/A";
    return temp > array[index - 1] ? "Rising" : "Falling"
})

console.log(trend);

// Ex 4: Normalize values (charts & graphs)
const expenses = [200, 300, 500];

const percentages = expenses.map((amount, index, array) => {
  const total = array.reduce((sum, val) => sum + val, 0);
  return (amount / total) * 100;
});

console.log(percentages);


// Ex:5 Prevent the mutation


const users = ["A", "B", "C"];

const user = users.map((user, index, array) =>{
    // BAD practice
    // array.push("D");

    // Good: read-only usage
    return user.toLowerCase()
});


console.log("users", user);

