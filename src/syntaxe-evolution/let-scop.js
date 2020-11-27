function letExample(value) {
  if (value) {
    let letValue = value

    console.log('inside block', letValue) // 2

    let letValue = 'foo'
  }

  try {
    console.log(letValue) // ReferenceError

    console.log('let not faithfully handled')
  } catch (e) {
    // e is a ReferenceError
    console.log('letValue not accessible', e)
  }
}
letExample(2)
