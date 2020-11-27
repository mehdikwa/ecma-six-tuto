function temporalDeadZoneExample() {
    // TDZ for `value` begins

    const func = function () {
        console.log('value is: ', value) // ok - function pas encore appelée
    }

    console.log(value) // ReferenceError
    // TDZ ends with declaration of `value`
    let value = 'foo'

    func()
    // value vas afficher 'foo'
}
temporalDeadZoneExample()
