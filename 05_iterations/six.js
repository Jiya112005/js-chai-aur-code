// const coding = ["js","ruby","python","cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values); //showing undefined in case of the console.log(item) in definition as it is not returning the value 
// hence use of return is essential to store value in variable but even if return is used still value is undefined 
//conclusion is foreach does not return any value 
//so how to apply any condition on the array elements in some cases using the foreach loop

const myNums = [1,2,3,4,5,6,7,8,9,10]
//some other methods 
// const newNums = myNums.filter( (num) => num>4)//also takes callback filter returns value 
//  const newNums = myNums.filter( (num) => {
//     return num>4
//  }) //prints empty array { } use of curly braces and no return keyword used but with parenthesis it automatically returns refer arrow.js

// const newNums = []
// myNums.forEach( (num) => {  //use of if else and syntax as foreach not return values 
//     if(num>4){
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    {title:'Book One',genre:'History',publish:1986,
    edition:1996
    },
    {title:'Book Two',genre:'Fiction',publish:1984,
    edition:2005
    },
    {title:'Book Three',genre:'Non-Fiction',publish:2005,
    edition:2013
    },
    {title:'Book Four',genre:'History',publish:1986,
    edition:2000
    },
    {title:'Book Five',genre:'Science',publish:1985,
    edition:2003
    },
    {title:'Book Six',genre:'Non-Fiction',publish:1981,
    edition:2016
    },
    {title:'Book Seven',genre:'History',publish:2011,
    edition:2018
    },
    {title:'Book Eight',genre:'Fiction',publish:1982,
    edition:2007
    },
    {title:'Book Nine',genre:'Non-Fiction',publish:1974,
    edition:2001
    }
]

// const userBooks = books.filter( (bk) => bk.genre === 'History' )

//let userBooks = books.filter( (bk) => {return bk.publish >= 1995} )


let userBooks = books.filter( (bk) => {return bk.publish >= 1995 && bk.genre==='History'} )


console.log(userBooks);
