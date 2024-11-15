//const tinderUser = new Object(); // Singleton Object 
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Subh";
tinderUser.loggedIn = false;

// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sourabh",
            lastname: "Prasad"
        }
    }
}
// console.log(regularUser.fullname.userfullname)

const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'c', 4:'d'};
const obj3 = {5:'e', 6:'f'};
    

// const obj4 = {obj1, obj2}; // wrong
const obj4 = Object.assign({}, obj1, obj2, obj3); // first empty {} is target.

// spread
const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5);

const user = [
    {
        id: 1,
        email:"a@gmail.com"
    },
    {
        id: 2,
        email:"b@gmail.com"
    },
    {
        id: 3,
        email:"c@gmail.com"
    },
    {
        id: 4,
        email:"d@gmail.com"
    }
]

console.log(user[0].email)