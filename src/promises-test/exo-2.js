function getCountryName(country) {
    country = country.toLowerCase();
    const promiseOfImageName = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (country === 'france' || country === 'chili' || country === 'danemark') {
                resolve(country + ' found');
            } else {
                reject(Error('Didn\'t receive a valid country name!'));
            }
        }, 1000);
    });
    console.log(promiseOfImageName);
    return promiseOfImageName;
}
getCountryName("france").then(data => console.log(data))

