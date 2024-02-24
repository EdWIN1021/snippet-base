/*
    - Waits for the first promise to fulfill.
    - If all promises are rejected, it rejects with an AggregateError containing 
    an array of rejection reasons.
    - ES2020
*/

Promise.any([
  Promise.reject("Fail"),
  Promise.reject("Fail"),
  Promise.resolve("Success"),
]).then((res) => console.log(res));
