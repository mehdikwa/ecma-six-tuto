const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'one');
    resolve('one')
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 50, 'two');
    resolve('two')
});

Promise.race([promise1, promise2])
    .then((value) => console.log(value))
    .catch(console.log('error'));
