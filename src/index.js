function createPromise(index, delay) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.5) {
        resolve(`GOOD - ${index}`);
      } else {
        reject(`BAD - ${index}`);
      }
    }, delay);
  });

  return myPromise;
}

for (let i = 0; i < 5; i++) {
  const p1 = createPromise(i, i * 1000);
  p1.then((message) => {
    console.log(message);
  }).catch((message) => {
    console.log(message);
  });
}

// ===========

const promise = new Promise((resolve) => {
  resolve("Hello World");
});

promise
  .then((data) => {
    console.log(data);
    return 10;
  })
  .then((data) => {
    console.log(data);
    return "Hello";
  })
  .catch((err) => {
    console.log(err);
  });
