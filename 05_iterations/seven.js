const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums= myNumbers.map( (num) => num+10 ) //if used curly braces (Scope) and return not used it givews array of undefined values 

//chaining method

const newNums = myNumbers.map((num) => num*10 ).map( (num) => num+1 ).filter((num) => num>40)
                        //here each num value is passed from the previous map function invoked as chaining
//map mein return hoga and filter has true and false values 
console.log(newNums)