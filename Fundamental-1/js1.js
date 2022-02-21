// HTML is responsible for the content of the page
// Css is responsible for color, design etc.
// js is responsible for dynamic and interactive , data collection
//////////// For Example ////////////////
// Html --> <p> </p>
// Css --> p{color: red}
// Js --> p.hide()
// ES6(2015) --> Es11(2020)  (Modern Javascript)

// comments single line
/* multiline comment
kasjdhfkjha
aslfdkjlakdsf
alksfj
*/

/////Primitive Datatypes
//1. number 
//2. string
//3. Boolean
//4. undefined
//5. Null
//6. Symbol(ES6)
//7. BigInt 
// name = 'ishan'

//String
let name = 'ishanas'  
console.log(name)
console.log(name)
console.log(name)
console.log('ishana')
console.log('ishanas')
console.log('ishanas')

// Number
let number = 10
console.log(number)

// Boolean
let age = true  //True False
console.log(age)

// Undefined
let firstName
console.log(firstName)

// Null
let bekar = null  //None
console.log(bekar)

// DateType Checking
console.log(typeof name)

// let , const , var
//let , const (modern js)
//var (old js)

// const
const lastName = 'Attri'  // date of birth
console.log(lastName)

// lastName = 'ishan'
// console.log(lastName)

// let
let street = 6   // Age
console.log(street)

street = 7
console.log(street)

// var 
var killer = 'mohit'
console.log(killer)
// console.log(killer)
// console.log(killer)
// console.log(killer)

killer = 'sharma'
console.log(killer)
// console.log(killer)
// console.log(killer)
// console.log(killer)

// scope --> global scope, function scope, block scope

// Basis Operators
//1. Arithmetic Operators (+,-,*,/,**)
let a = 30
let b = 20
let add = a+b
let multiply = a*b
let power = a**b
let divide = a/b
console.log(add,multiply,parseInt(divide))

// Variable Dec _jakdls3$, not 3years
let motherNameFatherName = 'op'
console.log(motherNameFatherName)

// let 3years = 3
// console.log(3years)

let _ishan = 3
console.log(_ishan+'23')  //print(_ishan+a)

// Concatenation
let firstNames = 'Himanshu'
let lastNames = 'Agrawal'
console.log(firstNames+ ' ' +lastNames)

//// COMPARISON OPERATORS  => '>',<,>=,<=,==,===,!=
let x = 20
let y = 50
console.log(x>y)
console.log(x<=y)

// == not datatype === check
let i = 20
let o = '20'
console.log(i==o)

/// Template Literals `` f"{}"

let warning = true
console.log(`is there any $warnings => ${warning}`)

// for Input
let dob = prompt("Enter Your Date of Birth")
console.log(dob)

// parseInt() '//' ,alert(), prompt() 