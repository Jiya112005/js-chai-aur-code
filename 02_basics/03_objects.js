//objects can be declared in two ways one is like a literal and another is like a constructor 
//creating with constructor creates a singleton object 
//constructor method: Object.create se banti hai 
//here talking about object literals 
const mySym = Symbol("key1")
const JsUser ={
    name:"Hitesh",
    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastloginDays:["Monday","Saturday"]
}

//accessing the objects values two methods can be used one is using .(dot) operator
// console.log(JsUser.email);
//another using [key] (Square brackets)
// console.log(JsUser["email"]);  //while passing key to [] use quotes as it is stored as string behind the scene 
 //accessing symbol 
//  console.log(JsUser.mySym); //wrong way of declaring symbol in object converted into string 
//  console.log(JsUser[mySym]);
 
//value change
// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)//restrict to change
// JsUser.email = "hitesh@asdf.com"

//function
JsUser.greeting = function(){
    console.log("Hello Objects");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

