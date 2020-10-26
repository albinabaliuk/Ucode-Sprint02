var One = 1;
var Time = 834928349834924384893283n;
var Greeting = "Hello";
var isTrue = true; 
var Null = null; 
var data = undefined; 
var person = {name : 'Andrew'}
var Symbol = Symbol("id"); 
var func = myFunc; 

function myFunc() {
  alert(Object.keys({One})[0] + " is " + typeof One + '\n'
  +
  Object.keys({Time})[0] + " is " + typeof Time + '\n'
  + 
  Object.keys({Greeting})[0] + " is " + typeof Greeting + '\n'
  +
  Object.keys({isTrue})[0] + " is " + typeof isTrue + '\n'
  +
  Object.keys({data})[0] + " is " + typeof data + '\n'
  +
  Object.keys({person})[0] + " is " + typeof person + '\n'
  + 
  Object.keys({Symbol})[0] + " is " + typeof Symbol + '\n'
  +
  Object.keys({func})[0] + " is " + typeof func + '\n')
}

myFunc();
