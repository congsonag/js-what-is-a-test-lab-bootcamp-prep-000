/*
function doNothing() {

}

function sayHello() {
  console.log('Hello!')
}

sayHello()

function sayHelloToIsabel() {
  console.log('Hello, Isabel!')
}

sayHelloToIsabel()

function doSomething(thing) {
  console.log(thing)
}

doSomething('anything')


function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}`)
}

sayHelloTo('Son Trinh')
sayHelloTo(5)

function add(x, y) {
  return x + y
}

console.log(add(7, 74))
*/

function map(f, a) {
  var result = []
  i;
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}

