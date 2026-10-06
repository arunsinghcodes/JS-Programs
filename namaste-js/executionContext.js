var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}

var sqaure2 = square(n);
var sqaure4 = square(4);
const sum = (a) => (b) => {
  return b ? sum(a + b) : a;
};

console.log("total", sum(1)(2)(3)(4)());
