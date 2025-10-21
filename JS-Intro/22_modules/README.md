# Modules JavaScript

- Modules are a way to organize code into reusable files.
- They help you split your code into smaller, manageable parts, making it easier to maintain, reuse, and avoid name collisions.

## CommonJS modules(CJS)

- Exporting single item

```
function greet(name){
    console.log(`Hello, ${name}`);
}
module.exports = greets;
```

```
const greetFunc = require("./utils.js");
greatFunc("Arun")
```

- Export multiple item

```
function add(a,b){
    return a + b;
}

const subscract = (a, b)=>{
    return a - b;
}

module.exports = {
    add,
    subtract
}
```

```
const main = require("./math");
let result1 = main.add(2,3);
let result2 = main.subtract(10, 3);
console.log(result1, result2);
```

#### In commonJS "exports" is a shorthand alias for module.exports

```
exports.add = (a, b) => a +b;
exports.subtract = (a, b) => a -b;
```

## ES6 Modules (modern JavaScript)

#### Default Export

- Make sure You're using type: "Module" on node.js

```
export default function add(a,b){
    console.log(a * b);
}
```

```
import defaultFunc from "./math.js";

defaultFunc(5,2);
```

#### Named export

```
export function subtract(a,b){
    console.log(a-b);
}

export function multiply = (a,b) =>{
    console.log(a * b);
}

function divide(a,b){
    console.log(a / b);
}

function modulo(a,b){
    console.log(a % b);
}

export {
    divide, modulo
}
```

```
import {
    subtract,
    multiply,
    divide,
    modulo
} from "./math.js";

subtract(5,2);
multiply(5,2);
divide(5,2);
modulo(5,2);
```
