// Primitive

// 7 types: String, Number, Boolean, null, NaN, undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 513234672342712323623n


// Reference Type (Non Primitive)
// Array, Objects, Functions

const heroes = ["Ashraf", "Uddin", "Asif"]//Arrays

let myObj = { // called object
    name: "Asif",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World");
}


// ++++++++++++++++++++++++++++++++++++++++++++++++

// Two types of memories: Stack and Heap

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "asifwithwheels"