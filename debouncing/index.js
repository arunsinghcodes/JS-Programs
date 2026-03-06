let counter = 0;
const getData = () => {
  console.log("Getting data....", counter++);
};

const doSomeMagic = (fn, d) => {
  let timer;
  return function () {
    let context = this;
    args = arguments;

     clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, d);
  };
};

const betterFunction = doSomeMagic(getData, 300);
