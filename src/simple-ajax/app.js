// using ajax request to fetch data from an api.

function getCatsFactsAjax(url, callback) {

    let xttp = new XMLHttpRequest();
    xttp.open("GET", url, true);
    xttp.send();
    xttp.addEventListener('readystatechange', function () {

        if (this.readyState == 4 && this.status == 200) {
            callback(this);
        }
    })

}

getCatsFactsAjax('https://cat-fact.herokuapp.com/facts', (res) => {
    let data = res.responseText;
    console.log(JSON.parse(data));
});


// using ES6 fetch Api

function getCatsFactsFetch(url) {
    return new Promise((res, rej) => {
        fetch(url)
            .then(r => res(r.json()))
            .catch(() => {
                // handel errors here
            })
    })
}

getCatsFactsFetch('https://cat-fact.herokuapp.com/facts')
    .then(res => console.log(res));
