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
console.log(`Result:${result}`);
