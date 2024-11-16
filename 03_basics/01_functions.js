function sayMyName() {
  console.log("S");
  console.log("O");
  console.log("U");
  console.log("R");
  console.log("A");
  console.log("B");
  console.log("H");
}

function add2Numbers(number1, number2){
    // let result = number1 + number2;
    return number1 + number2;
}

const result = add2Numbers(5, 6);
// console.log("Result: ", result);

function logInUserMessage(username = 'micro'){
    if (!username) {
        console.log("Please enter a username.");
        return;
    }
    return `${username}: just logged in`;
}
// console.log(logInUserMessage());

// ...num1 is a rest operator returns array of passed arguments.
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "sourabh",
    price: 199
};

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

handleObject({
    username: "sourabh",
    price: 299 
}) // We can also Pass direct Object

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))