//// Objects in js
let obj = {
    name: 'ishan',
    class: 'AI',
    rollNo: 3798
}

console.log(obj['class'])

let person = new Object()
person.name = 'ishan'
person.rollNo = 2110993798

console.log(person['name'])

const checking  = {
    firstName: 'ishan', 
    lastName: 'Attri',
    rollNo: 3798,
    stream: 'B.tech',
    allInfo: function(){
        console.log(this.firstName, this.lastName, this.rollNo, this.stream)
    }
}

checking.allInfo()

const person1 = new Object()
person1.name = 'unknown'
person1.stream = 'b.tech'
person1.full = function(){
    console.log(this.name, this.stream)
}

const array = Object.values(person1)  // this will gives us all the values of all the prop.
console.log(array)

const strinfy = JSON.stringify(person1) // all the object  including string converted into string
console.log(strinfy)  

const sampleArray = ['john', 'mark']
console.log(JSON.stringify(sampleArray))


///// JS Accessors (like getter and setter function in python)

console.log(Object.keys(person1))   // returns the array containing objects properties (keys in python)
// console.log(Object.caller(checking.allInfo()))
console.log(`hello i am ishan attri ${person1.stream} ${person1.name}`)
console.log('Hello this is sample text')






// const arrowChecking  = {
//     name: 'oney',
//     class : 10,
//     info: ()=>{
        
//     }
// }

// arrowChecking.info()
// function news(){
//     let name = 'ishan'
//     let output
//     console.log(output, name)
// }
// news()
// const checking = () =>{
//     let check = 'true'
//     let ck = this.check
//     console.log(ck, this.j)
// }

// checking()
