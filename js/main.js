//PROMISE
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 2000);
});

promise1.then((value) => {
  console.log(value);
});
promise1.catch();

console.log(promise1)