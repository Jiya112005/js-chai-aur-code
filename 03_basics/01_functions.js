//to do repeatative tasks like here sayMyName multiple times 
function sayMyName(){
    console.log("J");
    console.log("I");
    console.log("Y");
    console.log("A");    
}
//sayMyName only writing withour parenthesis represents its reference rather than calling it 
// sayMyName() // calling  " () "

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// addTwoNumbers() //NaN as no arguments passed
// addTwoNumbers(3,4) //returns 7 as both are numbers 
//problemetic 
// addTwoNumbers(3,"4")//returns 34 not performing the operation of addition as js itself iterprets the data types and logical way is to check the datatype of argument using if else 

/*
    Difference between parameters and arguments 
    parameters: when function defination is created the variables passed in during defining are parameters 
    argumeents: When function is called and value that is passed to it on calling that values are known as arguments 
*/
//constructing function defination with return to store in variable or any where 
function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // console.log("Addition "); //this will be printed as it is written before the return statement
    return number1+number2
    // console.log("JIYA"); //unreachable code due to return statement above after return nothing is executed 
}

const result = addTwoNumbers(3,5)
// console.log(`Result:${result}`);

//Another example to understand in a better way return
function loginInUserMessage(username="sam"){
    if(!username){ //if username = undefined considered as false value equivalent to (username===undefined) or if no value provided by user then you can provide default value 
        console.log("Please enter valid username");
        return
    }
    return `${username} logged in`
}
// loginInUserMessage("hitesh") //prints nothing beacause of return statement it should be in console log.
// console.log(loginInUserMessage("Jay")); //prints jay logged in 

/* In cases like no parameter is passed then undefines  takes place 
    2. Another case can be even if it is not string then also takes value as datatype is not defined here hence even if I provide null it takes it or no value  */
// console.log(loginInUserMessage()) //prints undefined logged in 


/*******************************Shopping Cart example (number of arguments not known)*************************************/
function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,300,400)); //normal function mein sirf first number pass kiya hua print hoga hence use of rest and spread operator 
// console.log(calculateCartPrice(200,300,400)); //returns array [200,300,400]


/*********Object passing in function *******************/
const user = {
    username:"Jayesh",
    price:299
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//checking the property you are passing is available or not and whether the value you are passsing its datatype is available or not 
//example if here price in user is changed to prices then output of price will be undefined 
// handleObject(user)
// handleObject({
//     username:"Krishna",
//     price:399
// })

/*******************Passing arrays in function*************************** */
const myNewArray = [200,300,500,340]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
