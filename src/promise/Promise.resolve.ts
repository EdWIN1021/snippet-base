const promise = Promise.resolve<string>("Success");

promise.then((r) => console.log(r));
