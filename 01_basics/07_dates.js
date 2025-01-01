let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString()); //Wed Jan 01 2025 
// console.log(myDate.toISOString()); //2025-01-01T11:19:43.407Z
// console.log(myDate.toLocaleDateString());//1/1/2025
// console.log(myDate.toLocaleString());//1/1/2025, 11:21:13 AM
// console.log(myDate.toLocaleString('en-IN'));//1/1/2025, 11:21:13 AM
// console.log(myDate.toLocaleTimeString()); //11:23:32 AM
// console.log(myDate.toJSON());    DATE is an object in javascript 

//Creating your own date providing the values in data object creation
//let myCreatedDate = new Date(2025,0,11) provided date only
// let myCreatedDate = new Date(2025,0,11,0,0) //provided time too
let myCreatedDate = new Date("2025-02-27") //yy-mm-dd syntax also mm-dd-yy can be used 

// console.log(myCreatedDate.toDateString()); //Sat Jan 11 2025   months starts from 0

//Timestamp: used for quizzes design,contests etc 
let myTimeStamp =  Date.now() 
//console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //in seconds 

//additional information from dates
let newDate = new Date();
//  console.log(newDate.getHours()); //only month or year without converting so can be done easily 
//customizing localeString format by 
console.log(newDate.toLocaleString('default',{
    weekday:"long",
    day:"2-digit"
}));
