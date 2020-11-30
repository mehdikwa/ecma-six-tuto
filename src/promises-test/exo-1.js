function asyncPromise(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = asyncPromise(true);

promise // success - Error - Error caught

    .then(function(data) {
        console.log(data);

        return asyncPromise(false);
    })

    .catch(function(error) {
        console.log(error);

        return 'Error caught';
    })

    .then(function(data) {
        console.log(data);

        return asyncPromise(true);
    })

    .catch(function(error) {
        console.log(error);
    });
