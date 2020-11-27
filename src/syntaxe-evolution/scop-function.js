// "use strict"
function exmaple() {
  myVar = 7

  console.log('myVar after declaration', myVar) // myVar = 7
  console.log('newVar before declaration', newVar) // newVar = undefined

  newVar = 10

  if (myVar < 20) {
    var myVar = 'foo'
    var varInterne = true

    console.log('myVar inside block', myVar) // myVar = "foo"
  }

  var newVar

  console.log('newVar after declaration', newVar) // newVar = 10

  console.log('myVar outside block', myVar === 7) // false

  console.log('varInterne outside block', varInterne) // true
}
exmaple();
