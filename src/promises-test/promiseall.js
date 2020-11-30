const promise1 = Promise.resolve('toto');
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise2');
    }, 3000)
});

Promise.all([promise1, promise2]).then(values => {
    console.log('promises ' + values)
})
