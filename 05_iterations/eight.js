const myNums = [1, 2, 3];

const myTotal = myNums.reduce( (acc, currval) => {
    return acc + currval
}, 0)

// array.reduce((accumulator, currentValue, currentIndex, array) => {
//     // return the new accumulator value
// }, initialValue);

// accumulator: The accumulated value that you return in each iteration. It's passed to the function in every iteration.
// currentValue: The current element being processed in the array.
// currentIndex (optional): The index of the current element being processed.
// array (optional): The array that reduce() was called on.
// initialValue (optional): The value that is used as the initial accumulator. If not provided, the first element of the array will be used as the initial value.

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay  = shoppingCart.reduce( (total, val) => total + val.price, 0);

console.log(priceToPay);