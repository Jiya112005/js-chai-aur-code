//old javascript does not contain classes modules etc advanced 
"use strict"; //treat the code as newer version of js
//alert(3+3)  different syntax to use alert in node than in browser 

//when to use semicolons or not (explaining code readability)
// console.log(3+3); 

// console.log("Jiya")   //code should be readable it is not at all clearly visible 
//summary : code readability is priority prettier extension for indentation can be used 
//standards documentation ecma script and mdn 

//datatypes not too much 
let name="hitesh" //string
let age = 18 //number type
let isLoggedin = false //boolean
//types: number(range is 2^53) 
//bigint
//string single or double quotes
//boolean (ha ya na !!) true or false 

//null it is standalone value (can be used to define variable) 
//undefined value defined nai kari   
let state;

//symbol datatype => react component identification very useful in react for uniqueness

//object 
// console.log(typeof null) //object type will be displayed and undefined 's type is undefined it is itself a type
//console.log(typeof undefined)


//SUMMARY OF DATATYPES 
//Primitive types : Number, String,Boolean,Symbol(used for uniqueness of component),BigInt,null,undefined
//Non-primitive also called as reference include : Arrays , Objects and Funcations Example given below
// const heros = ["Ironman","Batman","Spiderman"]

let myObject = {
    name:"jiya",
    age:20,
}
const myFunction = function(){
    console.log("Hello World")
}  //function can also be stored in variables like other datatypes 

// myFunction()
//console.log(typeof myFunction)
//symbol usage
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id==anotherId) //false different as it is of symbol type
console.log(typeof id)

