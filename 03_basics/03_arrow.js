const user = {
    username:"Ramesh",
    price:999,
    welcomeMessage:function (){
        console.log(`${this.username} , welcome to website`);
        console.log(this);      //tis represents current context (values)   
    }
}

// user.welcomeMessage() //this represents username is Ramesh
// user.username  ="suresh"
// user.welcomeMessage()//this changes and represents username as suresh 

// console.log(this);
//global this what value? : answer is {} is the context in node environment whereas in console window it represents window


//+++++++++++++++ ARROW FUNCTIONS+++++++++++++++++++
// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) =>(num1+num2) //if parenthesis() are used then no need to write return and use can use this inside arrow function 

const addTwo = (num1,num2) => ({username:"Added"}) //parenthesis helps in this cases when object are to be returned  
// console.log(addTwo(3,4));

const arrFun = () => {
    console.log(this)
}
// arrFun() //prints {} scope

function normFunc(){
    console.log(this)
}
// normFunc() //includes already many global variables and microtasks etc 