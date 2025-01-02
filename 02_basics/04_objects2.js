//constructor 
const tinderUser = new Object()
tinderUser.id ="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

//accessoing nested objects 
// console.log(regularUser.fullname.userfullname.firstname);
//if api se value aa rahi hai so you can use syntax of ? in chaining as console.log(regularUser.fullname?.userfullname.firstname);
//here checks first whether full name present or not (in depth later) 

/*Object combined */
const obj1 = {1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2) //first one is target and all others are source
//most used method is spread
const obj3 = {...obj1,...obj2}
// console.log(obj3);
//when value comes from database it is in form of array of objects 
const users = [
    {
        id:1,
        email:"hitesh@gmail.com"
    },
    {
        id:2,
        email:"shyam@gmail.com"
    },
    {
        id:3,
        email:"ramesh@gmail.com"
    }
]
// console.log(users[1].email); //accesing objects from array 

//accesing the keys and values in tinderuser object 
console.log("Simple",tinderUser);
console.log("KEYS: ",Object.keys(tinderUser));
console.log("VALUES: ",Object.values(tinderUser));
console.log("ENTRIES: ",Object.entries(tinderUser)); //array inside array 
//checking property availability 
console.log(tinderUser.hasOwnProperty('isLogged'));
