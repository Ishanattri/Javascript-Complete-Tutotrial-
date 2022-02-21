'use strict'

let hasDriversLicense = false
let passTest = true

// let hasDriverLicense = 
//let const var
if (passTest) {
    hasDriversLicense = true
}

if (hasDriversLicense){
    console.log('I can drive')
}

// const interface = 'audio'
// const private = true


//////// Functions //////////

// console.log('Ishan Attri')
// console.log('Ishan Attri')
// console.log('Ishan Attri')
// console.log('Ishan Attri')
// console.log('Ishan Attri')
// console.log('Ishan Attri')
// console.log('Ishan Attri')
// console.log('Ishan Attri')

//def  parameters ==> variables 
function add(x,y){
    let c = x+y   // 3+4
    console.log(c)  // 7
}
add(3,4)  // functions calling or invoking or running

function sub(x,y){  //  5,3
    let a = x - y  // 5 -3
    return a       // 2
}
let store = sub(5,3)
console.log(store)

console.log(sub(5,3))

function calcAge(birthYear){  // 2003
    return 2021 - birthYear  // 2021 - 2003 ==> 18
}

let age = calcAge(2003)
console.log(age)

// Anonuomus Function

const calcAge2 = function(birthYear){
    return 2021 - birthYear
}
console.log(calcAge2(2001))

/////////////// Function calling Other Function //////////////////////

function pieces(fruit){   // 4
    return fruit * 4     // 4 * 4
}

function fruitProcess(apples,oranges){  // 3(apples) , 4 (oranges)
    let applesPieces = pieces(apples) //  pieces(3) => 12
    let orangesPieces = pieces(oranges)  // pieces(4) => 16

    return `No of apple ${applesPieces} pieces and No of Orange ${orangesPieces} Pieces`
}

let juice = fruitProcess(3,4)
console.log(juice)

//////////////////// ARROW FUNCTIONS (ES6) ////////////////////////
// Shorter or easier to write

let age2 = (birthYear) => 2021 - birthYear  // when you have only 1 parameter
console.log(age2(2002))

// Arrow function with 2 parameter

const calcAge3 = (birthYear,Name) =>{  // let birthYear = 2003, let Name = 'Ishan'
    let age3 = 2021 - birthYear
    return `The person name is ${Name} and the person age is ${age3}`
}

console.log(calcAge3(2003,'Ishan'))


const yearsUntilRet = (birthYear) =>{
    const currentAge = 2021 - birthYear
    const ret = 60 - currentAge
    return ret
}

console.log(yearsUntilRet(1998))


