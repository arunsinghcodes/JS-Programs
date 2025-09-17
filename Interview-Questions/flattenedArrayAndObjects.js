const data = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4, { e: 5 }],
  },
  f: [6, { g: 7, h: [8, 9] }],
};

function flatten(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === "object" && obj[key] !== null) {
        flatten(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}
const flattened = flatten(data);
console.log(flattened);
