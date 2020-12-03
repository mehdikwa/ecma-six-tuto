const stringLetters = (string) => {
    return string.split("").reduce((accumulator, currentValue) => {
        accumulator.hasOwnProperty(currentValue) ?
            accumulator[currentValue]++ :
            accumulator[currentValue] = 1
        return accumulator
    }, {})
}

function countLetters4(str){
    return [...str].reduce((accumulator, currentValue) => Object.assign(accumulator, {
        ...({[currentValue]: !accumulator[currentValue] ? 1 : ++accumulator[currentValue]})
    }), {} );
}

const isPresent = (string, target) => {
    return string.split("").reduce((accumulator, currentValue) => {
        if(currentValue === target) accumulator = true;
        return accumulator;
    }, false)
}
