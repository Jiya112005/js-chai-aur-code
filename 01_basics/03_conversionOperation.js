let score = "33abc"
//backend does not know form of data whether number or string let's suppose you have to perform the operation in backend on number 
//here value is in string do for that 
console.log(typeof score);
console.log(typeof (score));
//converting to number 
let scoreInNumber = Number(score)
console.log(typeof scoreInNumber); //conversion from string to number using Number()
//loophole is it can be converted from string to number but it can also convert 33abc here in score and return number type but if we actually print its value then it will be Nan
//consider this while using js
console.log(scoreInNumber)