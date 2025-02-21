//object literal
// const user = {
//     username:"hitesh",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log(`${this.username} got user details`);
//         // console.log(this);
        
//     }
// }

// console.log(user.username)
// console.log(user.getUserDetails());


//context if current context use of this keyword is done 
//constructor function 
// const promise1 = new Promise()
// const date = new Date()   //new keyword is construction  function calling helps to create new context 

function User(username,loginCount,isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn

    return this
}

const userOne = new User("hitesh",12,true)
const userTwo = new User("chaiaurcode",11,false) //when created this then it overrides the userOne data even if userTwo is not console log 
console.log(userOne); //to avoid overriding of data from creating different users we use new 
console.log(userTwo);
//constructor function gives you a copy of object that is new instance 
/* working of new (internal mechanism):
    step1: empty instance created 
    step2: Constructor function call which packs your arguments and all 
    step3: then the given package is injected in this 
    step4: return this */
//it implicitly returns the value even if this is not return 