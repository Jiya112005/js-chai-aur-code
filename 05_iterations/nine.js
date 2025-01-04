//reduce method
//functionality: user supplied reducer 
//reduce(callback) 
//inside callback function it has two values as parameters reduce( (accumulator,currentvalue)=>accumulator+currentvalue)
//the accumulator first take value from initialvalue provided at first and then accumulator takes previous values

const myNums = [1,2,3]


// const myTotal = myNums.reduce( function(acc,currVal) {
//     console.log(`acc: ${acc} and current Value ${currVal}`);
//     return acc+currVal
//},0)//function and the initialvalue

//arrow function usage
const myTotal = myNums.reduce( (acc,currVal)=> acc+currVal ,0)


// console.log(myTotal);


//shopping cart example
const shoppingCart=[
    {
        itemName:'js course',
        price:2999
    },
    {
        itemName:'python course',
        price:999
    },
    {
        itemName:'mobile dev course',
        price:5999
    },
    {
        itemName:'data science course',
        price:12999
    }
]

//add to cart 
const priceToPay= shoppingCart.reduce( (acc,item) => (acc + item.price),0) //for example it is done diretly otherwise for website first verify the type of data 
console.log(priceToPay);

