const coding = ["js","ruby","python","cpp"]

//for each by deafult in array 
// coding.forEach( function (item) {
//     console.log(`Item in coding ${item}`);
    
// })
// coding.forEach(  (item) => { //using arrow function inside forEach
//     console.log(`Item in coding ${item}`);
    
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
    
// }) //also has values like index and whole array in parameters to make use in cases where needed 


//array of object
const myCoding = [
    {
        languageName:"Javascript",
        languageFilename:"js"
    },
    {
        languageName:"Java",
        languageFilename:"java"
    },
    {
        languageName:"Python",
        languageFilename:"py"
    }
]

myCoding.forEach( (item) => {  //this method can be helpful in database to take an array values from the database 
    console.log(item.languageFilename +":"+item.languageName);    
})