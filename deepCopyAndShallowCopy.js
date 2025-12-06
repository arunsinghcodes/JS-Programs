// Deep copy and shallow copy in JavaScript

const { useState } = require("react");

// What does "Copying" mean in JavaScript?

/*

JavaScript has two kinds of values:

1. Primitive Values
- numbers
- string
- booleans
- null
- undefined
- symbols
- bigints


these are copies by value (Actual data).

*/

let a = 5;
let b = a; // b gets own copy

a = 10;

console.log(b); // still 5 (separate copies)


/*

Objects(Non-primitie values)

- Object {} 
- arrays []
- functions
- dates
- map/sets

There are copied by reference, not by value


*/

let obj  = {
    x : 1
};

console.log("before Original Object", obj);

let copyObj = obj;

copyObj.x = 99

console.log("After updating Original Object", obj);
console.log("copyObj", copyObj);
 
// 99  both values changed

//  This is why we need shallow and deep copies.


// what  is a shallow cope? simple explanation

/*
A shallow copy copies only the top-level properties
but nested objects remain shared

*/

let original = {
    a: 1,
    b:{
        c: 2
    }
}

let shallow = {...original}; // shallow copy

shallow.b.c = 99;

console.log(shallow);
console.log(original); // it changed vale of c in the original object

/*

Why?

Because both objects share the same nested objects

Think of it like:

You photocopy a page
But any sticky notes attached to it are still shared.

*/

// 3. what is a deep copy? (Simple Explantion)

/*

A deep copy copies everythings
Including nested objects, array etc,

- A deep copy produces a completely independent clone

*/

// Example: First Ways -> of doing deepcopy

let originalDeep = {
    a: 1,
    b: {
        c: 2,
    }
}

let originalDeepCopy = structuredClone(originalDeep);

originalDeepCopy.b.c = "Arun";

console.log("originalDeep", originalDeep);
console.log("originalDeepCopy", originalDeepCopy);

// Ways to make shallow copies

// 1. Spread Operatore

/*

let objCopy = {...obj};
let arrayCopy = [...arr];

*/

// 2. Object.assign()

/*
let copy = Object.assign({}, obj);
*/

// These copy the only the first level;

// 5. Ways to make deep copies

/*

Eassiest method (mordern JS) - structuresClone()

Avaible in mordern browsers +. Nodejs >= 17.


let deep = structuredClone(obj);

Handels dates
Handels arrays
Handels nested Object
Handels circular refernces
Fast
Recommended


*/

/*
Old classic method(not always reliable)

let deep = JSON.parse(JSON.stringify(obj));

Fails for:

functions
Dates(Converted to string)
undefined
inifity
maps/Sets
circular references

*/

/*
Using recursion manually(Advanced)

function deepCopy(obj){
    if(obj === null || tyepOf obj !== "object") return obj;

    let copy = Array.isArray(obj) ? [] : {};

    for(let key in obj){
    copy[key] = deepCopy(obj[key]);
    }

    return copy;
}
*/

/*
Using libraries(Advanced)
- lodash -> _.cloneDeep(obj)
- Immer
- Ramda
*/

/*
6. Visual Explanation (supper simple)

- Shallow copy 

original ----> {a: 1, b: {c: 2}};
shallow -----> {a: 1, b: SAME REFERENCE }

->. Both objects share b.


- Deep Copy

original ----> {a: 1, b: {c: 2}};
deep -------->  {a: 1, b: {c: 2}};

Nothing is shared.
*/

/*
7. Real Life Examples that matter

Example 1: Cloing an array of objects


*/

let arr = [
    {x: 1},
    {y: 2}
];

let deep = structuredClone(arr);

deep[0].x = 999;

console.log(arr);
console.log(deep);

// example 2: React state probleam(Common beginner bug)

const [user, setUser] = useState({
    name: "Bob",
    addess: {
        city: "Paris",
    }
});

// this is wrong of doing
setUser({...user, addess: {...user.addess, city: "NY"}});


/*
what  is the best of doing now then
-> Your example is not actually wrong — it works, but it's messy and gets worse with deeper objects.

setUser({ 
  ...user, 
  address: { 
    ...user.address, 
    city: "NY" 
  } 
});

This is fine for one level deep,
but if your object becomes:

user.address.location.coords.x


…then shallow spreading becomes a nightmare.


2. The BEST way (modern, simplest, safest): setUser(prev => structuredClone(prev)) + modification

React devs increasingly use structuredClone for deep copying.

setUser(prev => {
  const updated = structuredClone(prev);
  updated.address.city = "NY";
  return updated;
});

Why this is best:

✔ Deep copy 100% guaranteed
✔ No manual spreading
✔ No bugs with nested objects
✔ Very readable
✔ Works in modern browsers and Node.js


3. The BEST way for large apps: Immer (used inside Redux Toolkit, Zustand, etc.)

Immer lets you write “mutating” code but keeps everything immutable.

import produce from "immer";

setUser(prev =>
  produce(prev, draft => {
    draft.address.city = "NY";
  })
);

Looks like mutation, but it’s not — Immer handles deep copies for you.

Why this is amazing:

✔ Zero mistakes
✔ Perfect readability
✔ Best for complex nested state
✔ Very common in professional React apps


4. The Best Pure-React Way (no libraries, no deep copy)

Use a callback updater and spread only what you need:

setUser(prev => ({
  ...prev,
  address: {
    ...prev.address,
    city: "NY"
  }
}));


✔ Works
✔ Correct
✔ Officially recommended way if not using external tools

But it becomes painful for deep trees.

4. The Best Pure-React Way (no libraries, no deep copy)

Use a callback updater and spread only what you need:

setUser(prev => ({
  ...prev,
  address: {
    ...prev.address,
    city: "NY"
  }
}));


✔ Works
✔ Correct
✔ Officially recommended way if not using external tools

*/

// React requires immutable deep copies for update.

/*

8. The best simple advice

when to use shallow copy

-> when data has no nested object
-> When only the top level matters


when to use deep copy
-> when you wanted full indepence
-> when dealing with nested objects or array
-> when using React/vue state.
-> When modifing API response

*/