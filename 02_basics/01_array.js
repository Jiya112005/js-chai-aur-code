const myArr = [0,1,2,3,4,5]
//each value inside is called as elements 
// contains different dataypes value
//resizeable
//access using index not string directly or element directly
// console.log(myArr[1]);  0 se start hoti hai
//Copy operation: when arrays are copied it creates shallow copies
//shallow copies: copy of an object sharing the same reference point(change will be reflected on original object also.) 
//deep copies: do not sharethe same reference (manipulation in copies only not in original)
//different ways of declarations 
const myHeros = ["Ironman","Batman","Spiderman"] //first method

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);  //basic operation of accessing element
//Array methods
// myArr.push(6)
// myArr.push(7) //add element to last value (here  7 added)  
// myArr.pop() //remove the last element (here 7 will be removes last element.)

// myArr.unshift(7)
// myArr.shift(); //works like push and pop for unshift each element is shifted to insert the value at first index creating loading for 
// //      the computer so avoid using
// myArr.shift() //first element will be removed 

//array methods answers in true or false :
/* 1.includes
   2. indexOf: if not present then -1 if present than returns the index number  */
// console.log(myArr.includes(7)); //return true
// console.log(myArr.indexOf(9));//returns -1 for 9 and returns 3 in 3 
const newArray = myArr.join();
// console.log(myArr); //simply print in square brackets 
// console.log(newArray);//newArray with join() binds the array and return strings
// console.log(typeof newArray); //returns string as an output 

//slice,splice methods 
console.log("A ",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B slice",myArr);
//splice
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C splice ",myArr);
//Main difference between lice and splice is original array MANIPULATES when SPLICE IS DONE
//ORIGINAL ARRAY remains SAME even after SLICING OPERATION 
 


