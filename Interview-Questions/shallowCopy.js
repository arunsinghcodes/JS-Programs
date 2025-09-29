// In JS, shallow copy and deep copy refer to how the objects and arrays are duplicates particularyly when 
// dealing with nested data structures

/**
 * 
 * 
 * 
 * 
 * shallow copy:
 * A shallow copy creates a new objects or array, but it only duplicates the top-level properties
 * If the original object or array contians nested objects and array, the shallow copy will stilll refernces the same nested obj/arr as the
 */

// let originalObject = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(originalObject)); // Common deep copy method

deepCopy.a = 5; // Modifies top-level primitive, originalObject.a remains 1
deepCopy.b.c = 3; // Modifies nested object, originalObject.b.c remains 2

console.log(originalObject); // Output: { a: 1, b: { c: 2 } }
console.log(deepCopy);   // Output: { a: 5, b: { c: 3 } }


let originalObject = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(originalObject)); // Common deep copy method

deepCopy.a = 5; // Modifies top-level primitive, originalObject.a remains 1
deepCopy.b.c = 3; // Modifies nested object, originalObject.b.c remains 2

console.log(originalObject); // Output: { a: 1, b: { c: 2 } }
console.log(deepCopy);   // Output: { a: 5, b: { c: 3 } }