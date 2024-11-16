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

// console.log(user[0].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // returns array of keys
console.log(Object.entries(tinderUser));  // returns array of arrays of all entries in the object

console.log(tinderUser.hasOwnProperty('loggedIn')); // check wether it is own property 

const course = {
    courseName: 'js',
    price: "999",
    courseInstructor: "hitesh",
};

// course.courseInstructor
// destructuring assignment
const {courseInstructor} = course; // we can use courseInstructor to get its value
const {courseInstructor: instructor}  = course; // we are can use instructor to get courseInstructor's value 
console.log(courseInstructor);


// API // JSON

// {
//     "name": "Sourabh",
//     "courseName": "js",
//     "price": "free"
// };

