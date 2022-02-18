// Operator Precedence

let data = 2+(3*6)
console.log(data)

// Power 14

let mas = 12 / 2**3 

let x,y,mass,power

x = 'ishan'
y = 'aklsdjhf'

console.log(`${x} ${y}`)

let a = 12
a+=3  // a = a+3
console.log(a)

let b = 13
b-= 10
console.log(b)

let o = 2
o++  // 1 add
console.log(o)

let p = 9
p--
console.log(p)

// Multiline String  
let firstName = 'ishita'
let lastName = 'jindal'
console.log(firstName+ '\n' +lastName)

let killer = 'Mohit \n\ishan'
console.log(killer)

let combine = `my name is ${firstName} ${lastName}`    //template literals or backticks

console.log(combine)


// If Else Statement

let home = true
if(home == false){           /// true == false
    console.log('if block')
}
else{
    console.log('Else block')
}

// let number = prompt('Enter a number')

// if (number < 30){
//     console.log(`${number} is less than 30`)
// }else{
//     console.log(`${number} is greater than 30`)
// }

// if (number < 30){
//     console.log(`${number} is less than 30`)
// }
// else if(number > 40){    // 50 > 40
//     console.log(`${number} is greater than 40`)
// }
// else if (number == 50){
//     console.log(`${number} is equal to 50`)
// }
// else{
//     console.log(`${number} is greater than 50`)
// }

const birthYear = 2012
let century;
if (birthYear <= 2000){
    century = 20
}
else{
    century = 21
}
console.log(century)

// Type Conversion or Coercion
// Type Conversion ==> Number() , String()
let s = 'sdf'  // string
let num = Number(s)  // number
console.log(typeof s, typeof num, num)

let numbe = 34
let str = String(numbe)
console.log(typeof numbe, typeof str)

// Type coercion
console.log('10' + 3)   // string + number 
console.log('23' - '10' - 3)  // 23 - 10 -3 ==> 23 - 13 ==> 10
console.log('23' * '2')
console.log('23' + '10' + 3)

// Type Conversion and coercion ex:
let n = '1' - 1  // 1-1 > 0
n = n-1  // 0-1 > -1 
console.log(n)  // -1

console.log(`2+3+4+${n}`)  // => 9+'5' => 95

/////////////// Truthy And Falsy Values \\\\\\\\\\\\\\\\\

// Falsy Values ==> 0, '', undefined, null, NaN  // false
// Truthy Values ==> All values other than falsy values is called truthy values
let money = 0;
if (money){
    console.log('if Block')
}else{
    console.log('else Block')
}

let j = Boolean('')
console.log(j)

////////////// LOGICAL OPERATORS \\\\\\\\\\\\\\\\
// And(&&) , or(||) , not(!) 
if (!5){     // 10>4 ==> true 5>4 ==> true   true && true ==> true
    console.log('if block')
}else{
    console.log('Else Block')
}


