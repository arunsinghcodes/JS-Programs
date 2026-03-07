// General by Default in built Bind function imlimation

const person = {
  name: "Arun",
};

function greet(city, country) {
  console.log(
    "Hello, " + "I am " + this.name + " from " + city + " " + country
  );
}

const boundGreet = greet.bind(person);
boundGreet();

// Write the polyfill for Bind which is own implimentation

Function.prototype.myBind = function (context, ...args) {
  const fn = this;

  return function (...argsCall) {
    return fn.apply(context, [...args, ...argsCall]);
  };
};

const myBindboundGreet = greet.myBind(person, "Hyderabad");
myBindboundGreet("India");
