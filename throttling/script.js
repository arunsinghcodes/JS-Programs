// throttling in JavaScript

// calling the api with certain interval of time

let count = 0;
const expensive = () => {
  console.log("Expensive operation", count++);
};

const throttling = (func, limit) => {
  let flag = true;
  return function () {
    let context = this;
    args = arguments;

    if (flag) {
      func.apply(context, args);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterExpensive = throttling(expensive, 300);

window.addEventListener("resize", betterExpensive);
