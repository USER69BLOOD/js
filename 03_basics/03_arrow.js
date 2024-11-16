const user = {
    username: 'sourabh',
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
    }

}

// function subh(){
//     let username = "sourabh";
//     console.log(this);
// }

// const subh = function(){
//     let username = "sourabh";
//     console.log(this);
// }

// const subh = ()=> {
//     let username = "sourabh";
//     console.log(this);
// }

// subh()

const addTwo = (num1, num2) => {
    return num1 + num2;
}

// Implicit return 
const addThree = (num1, num2, num3) => (num1 + num2 + num3);

// console.log(addThree(5,5,5));
