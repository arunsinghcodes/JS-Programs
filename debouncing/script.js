// can you implement the debounce function here
// let's track with some variables

let counter = 0;

// deboucing functionality
const getData = () => {
  console.log("Fetching data...", counter++);
};

const debouce = (func, dely) => {
  let timer;
  return function () {
    let context = this;
    args = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, dely);
  };
};

const betterFunction = debouce(getData, 300);

// only call the function when differnce of two key press is greater then 300ms

// usecase

/*

- seraching
- onScroll events
- resizing windows
- lazy loading

*/
