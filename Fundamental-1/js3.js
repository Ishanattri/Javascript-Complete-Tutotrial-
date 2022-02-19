// Switch Case Statements

const day = prompt()

switch(day){
    case 'monday':
        console.log("Today is Monday")
        break
    case 'tuesday':
        console.log("Today is Tuesday")
        break
    case 'wednesday':
    case 'thursday':
        console.log('wednesy or thor')
        break
    default:
        console.log('Other day')
}

// if(day){
//     console.log('')
// }


const sem = 1
const year = 2012
switch(sem){
    case 1:
        switch(year){
            case 2012:
                console.log('sem 1 and year 2012')
        }
}

const a = 2
switch(a>20){
    case true:
        console.log('hello')
    case false:
        console.log('a')
}


///// The Conditional (Ternary) Operator (?)
///  condition ? _______ : __________


const day = 'mond'
day=='monday' ? console.log('Today is monday') : console.log('Other day')

const age = 18
const drink = age>=18 ? 'Wine 💕' : 'Water 😎'  // react native or react js
console.log(drink)

// if (age == 18){
//     console.log('wine')
// }else{
//     console.log('water')
// }

console.log(`I like ${age>=18 ? 'Wine 💕' : 'Water 😎'}`)
