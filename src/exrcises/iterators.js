(function() {
    'use strict';

    // TODO: exerice 1: retourner toutes les valeurs dans notre iteratorValues
    // declarer une collection avec les valeurs ['produit-1', 'produit-2', 'produit-3'];
    // declarer une variable iteratorValues qui recupere les valeurs de notre iterator;

    // output: retourner toutes les valeurs dans notre iteratorValues, exp {value: 'produit-1', done: false}

    // TODO: exrcise 2: recuperer les 6 premieres sequences fibonacci et les afficher
    function applyIteration(iterable, count) {
        // recuperer le default `@@iterator` de iterable

        return {
            next() {
                // implementing `next()` makes it an iterator

                if (count > 0) {
                    // retourner la nouvelle valeur en decremantant le count
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
    }

    // recuperer les 6 premieres sequences fibonacci et les afficher : [1, 2, 3, 5, 8, 13]

}) ();
