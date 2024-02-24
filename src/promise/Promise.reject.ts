const promise = Promise.reject<string>("Fail");

promise.then((r) => console.log(r)).catch((err) => console.log(err));
