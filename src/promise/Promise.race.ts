import { User } from "../types";

/*
    - Resolves with the value of the first promise to settle (fulfill or reject).
    - If the first promise is fulfilled, it fulfills with that value. 
    - If the first promise is rejected, it rejects with that reason.
*/

const getData = async (num: number): Promise<User> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${num}`);
  const data = (await res.json()) as User;
  return data;
};

Promise.race([getData(1), getData(2), getData(3)]).then((results) => {
  console.log(results);
});
