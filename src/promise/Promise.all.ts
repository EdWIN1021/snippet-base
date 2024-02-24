import { User } from "../type";

/*  
  Returns: 
  - A promise that is fulfilled with an array of fulfillment values 
    from the promises in the iterable.
*/

const getData = async (num: number): Promise<User> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${num}`);
  const data = (await res.json()) as User;
  return data;
};

Promise.all([getData(1), getData(2), getData(3)]).then((results) => {
  console.log(results);
});
