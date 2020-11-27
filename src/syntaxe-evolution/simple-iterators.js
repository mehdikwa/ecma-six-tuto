class MyArray extends Array {
    static get [Symbol.species]() { return Array; }
}

var a = new MyArray(1,2,3);
var mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true


export default function helloWorld() {

    const products = [1,2,3,4]
    const iterator = products[Symbol.iterator](); // => object

    iterator.next(); // {value: 1, done: false}
    iterator.next(); // {value: 2, done: false}
    iterator.next(); // {value: 3, done: false}
    iterator.next(); // {value: 4, done: false}
    iterator.next(); // {value: undefined, done: true}

    for (const item of products) {
        console.log(item)
    }
}

export default function helloWorld2() {
    const products = [1,2,3,4];
    const others = [5,6]

    for (const item of [...products, ...others]) {
        console.log(item)
    }


    const message = 'Salut!';

    const [debutChar, ...finChar] = message;

    debutChar; // "S"
    finChar; // ["a", "l", "u", "t", "!"]
}

export default function mapAndSetTest(user) {
    const map = new Map();
    map.set(1,2);
    map.set(3,4);

    for (const [key, value] of map) {
        console.log(key, value);
    }

    const weakMap = new WeakMap();
    const code1 = {code: '1'};
    const code2 = {code: '2'};
    weakMap.set(code1,2);
    weakMap.set(code2,4);

    weakMap.get(code1) // '1'

    const set = new Set(['blue', 'red', 'green']);
    for (const item of set) {

        console.log(item);
    }

    const weakSet = new WeakSet();
    weakSet.add(code1);
    weakSet.add(code2);
}
