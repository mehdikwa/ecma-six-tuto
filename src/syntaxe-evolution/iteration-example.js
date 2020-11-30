function applyIteration(iterable, count) {
    // recuperer le default `@@iterator` de iterable
    let iterator = iterable[Symbol.iterator]();
    return {
        next() {
            // implementing `next()` makes it an iterator

            if (count > 0) {
                // retourner la nouvelle valeur en decremantant le count
                count--;
                return iterator.next();
            }
            else {
                return {done: true};
            }
        },
        [Symbol.iterator]() {
            // implementing default `@@iterator` makes it an iterable
            return this;
        }
    };
}

let testFibonacci = {
    [Symbol.iterator]() {
        let previous = 0, current = 1;
        return {
            next() {
                [previous, current] = [current, previous + current];
                return {value: current};
            }
        }
    }
}


for (var number of testFibonacci) {
    // itererer sur les valeurs fibonacci et s'arreter 'break;' quand on depassera les 1000
    // output la valeur number

    if (number > 1000)
        break;

    console.log(number);
}

console.log(Array.from(applyIteration(testFibonacci, 6)));
