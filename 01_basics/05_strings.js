const name = "ABC"
const repoCount = 50
// console.log(name+repoCount+" Value of repo"); //old way of writing 
//new way using the backticks (`) and string INTERPOLATION for injecting variable use ${var}
// console.log(`Hello name is ${name} and repo count is ${repoCount}`);
// console.log(typeof String);
const gameName = new String("absdgfun")
// console.log(gameName);
// console.log(typeof gameName); //showing object type give length property anf many other methods present inside prototype

//some methods
// console.log(gameName[0]) //a
// console.log(gameName.__proto__); //{} 
// console.log(gameName.length);  
// console.log(gameName.toUpperCase());  
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('b'));

// const newString = gameName.substring(0,5)
// console.log(newString)
//using slice and pass negative index
// const anotherString = gameName.slice(-8,4)
//console.log(anotherString);
//using trim() starting and ending space are removed
const newString1 = "     gmail.com       "
console.log(newString1);
console.log(newString1.trim());
//replace used in url to remove %20 types values and includes method usage to check the variable lies or not 
