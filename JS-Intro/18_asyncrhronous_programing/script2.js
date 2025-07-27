// Why Do we get a promises instead of Data?

let data = fetch("https://jsonplaceholder.typicode.com/users");
console.log(data); // it logs a Promise, not actual data

// You get a promise -> not the real data -> becasue the data isn't ready yet.

// API calls are asynchronus in nature.
/*
-> Fetching data takes time (maybe 500ms, 2s ,or more).
-> JavaScript does'nt want to stop everythings and wait(It's single threaded)
-> Instead, it gives you a promise, saying: "I'll give you the data later, once it arrives."
*/

async function fetchData(){
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(data);
    let json = await data.json();
    console.log(json)
}

fetchData();

const url = new URL("https://example.com");
const req = new Request("https://example.com");

/*

function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>
 
interface RequestInit {
  method?: string; // e.g., 'GET', 'POST'
  headers?: HeadersInit; // headers as an object or Headers instance
  body?: BodyInit | null; // payload like JSON or FormData
  mode?: RequestMode; // 'cors', 'no-cors', 'same-origin'
  credentials?: RequestCredentials; // 'omit', 'same-origin', 'include'
  cache?: RequestCache; // 'default', 'reload', 'no-cache', etc.
  redirect?: RequestRedirect; // 'follow', 'error', 'manual'
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  integrity?: string; // Subresource Integrity string
  keepalive?: boolean;
  signal?: AbortSignal; // for cancelling the request
}


*/