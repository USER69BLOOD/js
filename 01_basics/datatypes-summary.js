// Primitive

// 7 Types : String, Number, boolean, null, undefined, Symbol, BigInt   

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;    //undefined
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 2342352352572485293434n;  //just use n at the end;

// Reference (non Primitive)

// Array, objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"];  //Array
let myObj = {
    name: "Sourabh Prasad",
    age: "22",
};  //Object

const myFunction = function(){
    console.log("Hello World");
}


// +++++++++++++++++++++++++++++++++++++

// Stack (Primitive),  Heap  (Non-Primitive)

let name = "Sourabh Prasad";
let anotherName = name;
console.log(name);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
};

let userTwo = userOne;
userTwo.email = "sourabh@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
