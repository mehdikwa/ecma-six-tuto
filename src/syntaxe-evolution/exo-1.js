const stringLetters = (string) => {
    return string.split("").reduce((accumulator, currentValue) => {
        accumulator.hasOwnProperty(currentValue) ?
            accumulator[currentValue]++ :
            accumulator[currentValue] = 1
        return accumulator
    }, {})
}

function countLettersUsingMap(str) {
    let count = 1;
    const myMap = new Map();

    for (const char of Array.from(str)) {
        const charInMap = myMap.has(char);
        if (charInMap) {
            const value = myMap.get(char);
            myMap.set(char, value+1);
        } else {
            myMap.set(char, count);
        }
    }
    console.log(myMap);
}

function countLettersUsingReduce(str){
    return [...str].reduce((accumulator, currentValue) => Object.assign(accumulator, {
        ...({[currentValue]: !accumulator[currentValue] ? 1 : ++accumulator[currentValue]})
    }), {} );
}

const countLettersUsingReduceOther = (string) => {
    return string.split("").reduce((accumulator, currentValue) => {
        accumulator.hasOwnProperty(currentValue) ?
            accumulator[currentValue]++ :
            accumulator[currentValue] = 1
        return accumulator
    }, {})
}

const isPresent = (string, target) => {
    return string.split("").reduce((accumulator, currentValue) => {
        if(currentValue === target) accumulator = true;
        return accumulator;
    }, false)
}
