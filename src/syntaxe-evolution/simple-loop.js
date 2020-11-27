function simpleLoopExample() {
    for (var i = 0; i < 5; i++) {
        console.log('i=', i)
    }
    for (let j = 0; j < 5; j++) {
        console.log('j=', j)
    }

    // i is accessible outside of the for loop
    // and has the value 5
    console.log('after i=', i)

    // j is not accessible outside of the for loop
    // and is a ReferenceError
    console.log('after j=', j)
}
simpleLoopExample()
