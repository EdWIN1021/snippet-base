/* 
  Returns: 
    - A promise that is fulfilled with an array of result objects, 
      rejects immediately if any promise in the iterable rejects.
    - ES2020
*/

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Fail"),
  Promise.resolve("Success"),
]).then((res) => console.log(res));
