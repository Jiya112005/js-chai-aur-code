const score= 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// using toString you can perform many additional string functions on it console.log(typeof balance);
// console.log(balance.toFixed(2));

const otherNumber = 1123.899
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++Math Operations+++++++++++++++++++++++++++++++++++++++++
// console.log(Math); //shows output as Object[Math]{}
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(2,3,4,5));
// console.log(Math.max(3,5,2,1));

//Random function in math
// console.log(Math.random()); //Always lies between 0 and 1
// console.log((Math.random()*10)+1);   multiply by 10 to shift through points roundoff or floor can be give value as 0 hence added to 1
 //for dice 
const minDice = 1;
const maxDice = 6;
// console.log(Math.floor(Math.random()*(maxDice-minDice)+1));
//for ranging between 10 to 20 simply add minimum value
const minVal = 15
const maxVal=20
console.log(Math.floor(Math.random()*(maxVal-minVal)+1)+minVal);



