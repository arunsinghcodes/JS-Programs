// need to create deep clone of the object so, write a funtion for this

const obj1 = {
  name: "Arun",
  age: 27,
  profession: "Software Engineer",
  address: {
    street: "DAV Street",
    city: "Dhanbad",
    state: "Jharkand",
  },
};

function deepCopy(obj) {
  const newObj = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof key === "object") {
        newObj[key] = deepCopy(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  return newObj;
}

const deepCopyObj = deepCopy(obj1);

console.log(obj1.address.street);
deepCopyObj.address.street = "Jaipure";
console.log(deepCopyObj.address.street);
