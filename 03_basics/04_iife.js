//IIFE: Immediately Invoked Function Expressions
//When the function is define it is immediately exceuted.
//Why need immediate execution?: For cases where you want to start the database connection when application starts on immediate basis 
//2nd case might be the scope problem the global scope variable might be used in functions can create a problem in functions in other words 
        //whatever declared in function can be polluted by global scope  (interview answer for iife use)
(function chai(){
    //named iife 
    console.log("DB CONNECTED");
})();
//As seen in arrow.js , the parenthesis helps to clarify the function and hence can be create iife using same method ()
// chai()//normal call when simple program of db connection but cases to avoid global pollution can be a problem
//simply here in the first parenthesis the function is wrapped and in the second parenthesis helps to call  the function 
//iife don't know context of ending hence in this situation you have to endthe line for ending first function 
(() => {
    console.log(`DB CONNECTED TWO`);
})();

//in case of parameters and argument passed 
((name)=>{
    console.log(`Name is ${name}`);
    
})('Sheldon')