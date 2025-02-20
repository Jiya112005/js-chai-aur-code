//promises consumes rather than creating in many cases 
//creating promises 
//promises is object representing eventual completion 

// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task 
//     //Database call 
//     //cryptography
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){               //resolve connected with .then()
//     console.log("promise consumed ");
    
// })

//resolve and reject in callback directly passed
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task two");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async two resolved");
    
// })

//data consumption and how values come in then to promise 
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Chai",email:"chai@example.com"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true                 //suppose netowrk request or web request or any file req is send if file access then also have to do something and true for the false condition too
//         if(!error){
//             resolve({username:"abcdef",password:"123"})
//         }else{
//             reject('ERROR:Something went wrong ')
//         }

//     },1000)
// })
//accessing a part of the object like her accessing only username
// promiseFour
// .then((user)=>{
//     return user.username
// }).then((username)=>{
//     console.log(username);
    
// }).catch(function(err){
//     console.log(err);
    
// }).finally(function(){
//     console.log("Finally the promise is either resolved or rejected ");
    
// })

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true                
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR:js went wrong ')
        }

    },1000)
})
//not mandatory to use promise by .then and .catch also needed in future to resolve the issue 
//cases when no database connection then don't want to go to next step
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()

//promise designed with no error functionality or no error can occur async will run but if error occurs or network can't access the
//async await can't handle the problems directly hence to handle it use of try and catch can be done 
//no of users 
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//          const data = await response.json()  //conversion takes time from response to json hence should take await for wait for this also 
//          console.log(data); 
        
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getAllUsers()

//doing same with promise then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{console.log(error);})