//truthy and falsy values considered as true or false without comparison 
// like here if userEmail has something inside then true returns and if it is empty string then returns the false values 
const userEmail = []  //empty array is considered as true 
// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email"); 
// }

//So what's the rule of empty string false and empty array true and many other similar cases 
//RULES
//falsy values 
/*
    false
    0
    -0
    BigInt 0n consider as falsy (know for interview perspective)
    ""
    null
    undefined 
    NaN
*/

//Truthy values
/*
    "0" :true
    'false':true
    " ":space in string
    []
    {}
    function(){}: truthy values
*/

//for checking array 
// if(userEmail.length===0){
//     console.log("Array is empty ");
// }

//for checking empty objects
const emptyObj = {}   //.keys returns empty array and then length can be checked accordingly to check empty object
if(!Object.keys(emptyObj).length===0){
    console.log(`Object is empty`);
    
}

//on console window
//when false==0 comparison is done it returns true
//similarly true for comparisons like 
    //false == ''(empty string)
    //0 == '' 
//Nullish Coalescing Operator (??): works upon null and undefined values 
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 //checks if null values or undefined values has came from database then to check the safety and assigning your own value this operator is used 
//assigns 10
// val1=undefined??20
// val1 = null ?? 10 ?? 30 //assigns first coming value after null
// console.log(val1);

//++++++++++++++++Ternary Operator ++++++++++++++++++++++=
// condition ? true : false 
const iceTeaPrice = 100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80")