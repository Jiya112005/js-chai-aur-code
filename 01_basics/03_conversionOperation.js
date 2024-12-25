let score = "33abc"
//backend does not know form of data whether number or string let's suppose you have to perform the operation in backend on number 
//here value is in string do for that 
// console.log(typeof score);
// console.log(typeof (score));
//converting to number 
let scoreInNumber = Number(score)
//console.log(typeof scoreInNumber); //conversion from string to number using Number()
//loophole is it can be converted from string to number but it can also convert 33abc here in score and return number type but if we actually print its value then it will be Nan
//consider this while using js
//console.log(scoreInNumber)
let isLoggedIn ="ab";
let booleanIsLoggedIn=Boolean(isLoggedIn)  //number to boolean conversion also string to boolean conversion
// console.log(booleanIsLoggedIn);
//1=>true; 0=>false
//string => ""=>false and "ab"=>true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber) //this are conversions and needed to convert the values from browser to number or boolean,objects or array from string 

/**************Operations************************/

