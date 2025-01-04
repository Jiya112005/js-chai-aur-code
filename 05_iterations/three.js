//Array specific or objects loops High Order array loops 
//for of
// ["","",""]
// [{},{},{}]

// const arr =[1,2,3,4,5]
// for (const num of arr) { //object used as a broader term here. it refers to which thing you have to apply loop on
//     console.log(num);
// }
// const greetings ="Hello world!"
// for (const letter of greetings) {
//     console.log(letter);
// } //an iterate strings with this for of 

//Maps
const map = new Map() //keey value pairs / insertion order in keys /unique values 
map.set('IN',"India")
map.set('US',"United States of America")
map.set('FR',"France")
map.set('IN',"India") //takes only unique values 
// console.log(map); 
// for (const [key,value] of map) {
//     console.log(key+":"+value);
// }

const myObject ={
    game1:'NFS',
    game2:'Spiderman'
}
// for (const [key,value] of myObject) {   //not iteratable this way  different method to iterate the objects 
//     console.log(key+":"+value);
// }

