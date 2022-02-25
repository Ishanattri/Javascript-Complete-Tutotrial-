////// ARRAYS ///////////////////
'use strict'

const arr = ['ishan', 'attri']
console.log(arr)

const fri = new Array('himanshu', 'ishita')
console.log(fri)

const f = new Array('s', 's')

// diff. datatypes
const diff = [1, 'ishan', true, undefined, [1,2,3]]
console.log(diff)

// for finding the length of the array
console.log(diff.length)

console.log(diff[1])

/// for getting the last ele
let a = diff.length
console.log(diff[diff.length-1])

// Array is mutable

diff[1] = 'attri'
console.log(diff)

///////////////////// Basic Array Methods/////////////

const friends = ['jack', 'john', 'mike']

/// for adding ele in array
/// last index
friends.push('abraham')
console.log(friends)

// add ele at the start
friends.unshift('Mukul')
console.log(friends)

const num = [1,2,3]
console.log(num+3)

/// For removing ele in array
const li = [1,5,4,2,3]
li.pop()
console.log(li)

li.shift()
console.log(li)

//// For checking the index of the element
const ja = [3,4,'mickel']
console.log(ja.indexOf('mickel'))
console.log(ja.indexOf(9))

//// ES6 INCLUDES

console.log(ja.includes('mic'))

///// inserting element at specific index
const op = ['ishan', 'jack', 'john']
op.splice(2,0,'himanshu', 'mukul')   /// index, no. of elem remove, 'ishan', 'mukul'
console.log(op)

op.splice(op.length-2,1)
console.log(op)

const fruits = ['apple', 'mango']
delete fruits[0]
console.log(fruits)

/// for concati... the arrays
const x = [1,2,3]
const y = [4,5,6]
const add = x.concat(y)
console.log(add)

// x.push(y)
// console.log(x)

/// Slice
const sli = ['jacobi', 'mar', 'asfd', 'asfd', 1,3]
const del = sli.slice(0,3)
console.log(del, sli)

// console.log(sli(0,3))