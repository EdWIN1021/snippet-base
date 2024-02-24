const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("Success");
    } else {
      reject("Fail");
    }
  }, 2000);
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));
