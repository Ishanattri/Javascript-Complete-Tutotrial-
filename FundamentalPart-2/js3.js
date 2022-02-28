//////////////////////////////////////// Objects in JS /////////////////////////////////////////////

let obj = {
    firstName: 'ishan',
    friends: ['ishita', 'himanshu']

}

console.log(obj['firstName'])
console.log(obj['friends'][0])

////////// or //////
console.log(obj.firstName)
console.log(obj.friends[0])



let jonas = {
    firstName: 'john',
    lastName: 'singh',
    age: 2003,
    calcAge: function(birthYear){
        return 2022 - birthYear
    }
}

console.log(jonas['calcAge'](2003))
console.log(jonas.calcAge(2003))

jonas.location = 'barnala'
jonas.bread = true
jonas['twitter'] = '@attri_ishan'
console.log(jonas.location, jonas)

jonas.firstName = 'ishans'
console.log(jonas.firstName)

///////////   Objects Methods //////////


let all = {
    firstName: 'ish',
    lastName: 'jk',
    age: 18,
    currentAge: 2021 - this.age
}

console.log(Object.keys(all))   //// keys (python)  Property(js)
console.log(Object.values(all)) /// values


const obj1 = {
    birthYear: 2003,
    calcAge: function(){
        console.log(this)
        return 2022 - this.birthYear
    },
    // calcAge1: ()=>{
    //     console.log(this)
    //     return 'hello'
    // }
}

// console.log(obj1.calcAge())
// console.log(obj1.calcAge1())
// console.log(this)


////////////// LOOPS ////////////

//i++
/////////////////////FOR LOOP  ///////////////////////
// for i in range()
for(let i = 0; i<=10; i+=2){
    console.log(i)
    console.log('hello My friend')
}

/////   WHILE LOOP  //////////////

let i = 0
while(i!=10){
    console.log('hello')
    i+=1
}


////// Nested For Loop

for (let i = 0; i<=10; i++){
    for(let j = 0; j<=10; j++ ){
        console.log(`{${i},${j}}`)
    }
}

