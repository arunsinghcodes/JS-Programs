const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

// output:

// {
//     "a": 1,
//     "b.c": 2,
//     "b.d.e": 3
// }

function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === "object" && obj[key] !== null) {
        flattenObject(obj[key], newKey, result);
      }else{
        result[newKey] = obj[key]
      }
    }
  }

  return result;
}


console.log(flattenObject(obj))
