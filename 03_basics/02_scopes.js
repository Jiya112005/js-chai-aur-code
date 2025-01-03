//three words let var and const
/*NOTES
    {} is scope (different from object)
     console window and code environment node has different meaning of global scope 
*/
// var c =300
let a =200 //global
if(true){
    let a =10
    const b =20
    // console.log("Inner: ",a); //local scope
    
    // c=30    
}
// console.log(a);// both will show error in printing if defined inside the block and printed outside
//console.log(b);
//console.log(c); //var printed irrespective of scope

/************Scope level (nested function) ***************** */
function one(){
    const username = "Ramesh"

    function two(){
        const website ="instagram"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()

//++++++++++++++++++ Hoisting+++++++++++

// console.log(addone(5)) //called before defintion
function addone(num){ //direct define
    return num+1
}

//using variable defining function
// addTwo(5) //error: Cannot access 'addTwo' before initialization
const addTwo = function (num){
    return num+2
}
// console.log(addTwo(5)) //called after inistializing only if before then results in error (hoisting)
//  Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
