const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros =["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//use of concat
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

//use of spread operator 
const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

//use of flat in case of number of arrays inside a array 
const another_array = [1,2,3,[4,5,6],[6,7,[4,5]]]
//for spread out all the elements flat() is used 
const real_another_array = another_array.flat(1) //parameter to be passed represents the depth in which it is to be spread 
// console.log(real_another_array);

//conversion of string or node list data to array
// console.log(Array.isArray("Harish"));
// console.log(Array.from("Harish"));
// console.log(Array.from({name:"Raj"}));//provide specification of array of keys or array of values 
let score1=100
let score2=200
let score3=300
//variables to array conversion
console.log(Array.of(score1,score2,score3));




