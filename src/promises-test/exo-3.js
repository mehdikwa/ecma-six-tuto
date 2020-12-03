const tableauSimpleDeMots = ['tomate', 'cerise', 'pomme']
const tableauComplexe = ['pomme', 0, true]

const allInCaps = (array) => {
    return new Promise((resolve, reject) => {

        let capsArray = array.map(word => {

            if(typeof word === 'string'){
                return word.toUpperCase()
            } else {
                reject('Error: Pas tous les mots sont de type String!')
            }
        })
        resolve(capsArray)
    })
}


const sortAllStr = (array) => {
    return new Promise((resolve, reject) => {
        if(array) {
            array.forEach((el) => {
                if(typeof el !== 'string'){
                    reject('Error: Pas tous les mots sont de type String!')
                }
            })
            resolve(array.sort());
        } else {
            reject('Error: impossible de trier.')
        }
    })
}


allInCaps(tableauSimpleDeMots)
    .then(sortAllStr)
    .then((result) => console.log(result))
    .catch(error => console.log(error))

allInCaps(tableauComplexe)
    .then(sortAllStr)
    .then((result) => console.log(result))
    .catch(error => console.log(error))
