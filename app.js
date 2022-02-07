console.log('app.js loaded')

// Data fun
// #region
// SECTION Data types

// Primitive (value type) / Non-Primitive (reference type)
// number, string, bool   / object, array, function

// primitive
let number = 5
let string = 'hello'
let bool = true

// non-primitive 
let object = {thing: "it's a thing"}
let array = [1,2,3,4,5]
function example(){
  console.log('im a function')
}

// SECTION operators
// number math and operators
number++ 
number--
number + 5 //NOTE number + 5, just did some math but i remember nothing 
number += 5 //NOTE number = number + 5
number -= 5
number *= 2
number /= 2
number %= 2
// comparative operators
number == 5 //TRUE returns true or false if well if it's true or false
number == '5' //TRUE
number === 5 //TRUE checks for equality and data type
number === '5' //FALSE checks for equality and data type
number > 4
number < 6
number >= 4
number <= 6
let sum = 2 + number 
console.log('sum', sum)
sum += '5'
console.log('sum', sum)

// string operators
let string2 = 'world'
string += ' world' //concatenation string = string + ' world'
string = `Hello ${string2}` //interpolation
let sameString = string == 'hello world'

console.log('string',string )
console.log('same string',sameString )

// bool operators
bool == true // are these equal?
bool != false // are these not equal? flip the value of bools with the ! (not/bang)

// extra conditional fun 🤠
console.log(5 == '5') //TRUE
console.log(5 == '5' && 5 < '4'); //FALSE, && AND returns true if BOTH sides are true
console.log('hello' == 'hello' || 5 < 4); // || OR returns true if ONE side is true
console.log(5 === '5' && 'h' == 'h' || 5 > 4); // TRUE
console.log(5 === '5' && ('h' == 'h' || 5 > 4)); // FALSE

// flipping a bool
console.log('pre flip',bool);
// marathon way
if(bool){
  bool = false
} else {
  bool = true
}

// shorter way (ternary)
bool = bool ? false : true

// speed run way
bool = !bool
console.log('post flip',bool);
 //#endregion

//  Code Says
//#region

// Function definition / declaration
function cowSays(){
  // console.log('Moo'); NOTE CODE SMALL MISS SMALL
 let animalElm = document.getElementById('animal')
//  console.log('animal elm',animalElm); NOTE FREQUENT TESTING helps solve bugs faster
 let saysElm = document.getElementById('says')
//  console.log('says elm', saysElm) NOTE THE less code you write between tests is less code to debug
let imageElm = document.getElementById('image')
// console.log(imageElm);
 animalElm.innerText = 'Cow'
 saysElm.innerText = 'Moo'
 imageElm.innerHTML = '<img class="img-fluid" src="cow.jpg" alt="" srcset="">'
}

let dictionary = {
  key : 'value',
  cow: '<img class="img-fluid" src="cow.jpg" alt="" srcset="">',
  duck: '<img class="img-fluid" src="duck.jpg" alt="" srcset="">',
  sheep: '<img class="img-fluid" src="sheep.jpg" alt="" srcset="">'
}

// NOTE Definition has parameters
function animalSays(animal, sound){
  console.log('arguments passed from html button',animal, sound);
  // NOTE reads as dictionary['duck'] || dictionary['sheep'] dependant on what you passed through to the function
  console.log( dictionary[animal])
  document.getElementById('animal').innerText = animal
  document.getElementById('says').innerText = sound
  document.getElementById('image').innerHTML = dictionary[animal]

}

// Function invocation / go / do the thing!
// cowSays()



//#endregion