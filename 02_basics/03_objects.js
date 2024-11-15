// singleton
// Object.create  //this method is used in singleton

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Sourabh",
    "full name": "Sourabh prasad",
    // mySym: "myKey1", // This will convert Sybol -> String 
    [mySym]: "myKey1", // will work as expected
    age: 20,
    location: "jaipur",
    email: "sourabh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]); // we can't use . operator cuz it's a Symbol.
console.log(mySym)

JsUser.name = "Subh";
// Object.freeze(JsUser) // this will freeze JsUser Object and will get modified 

JsUser.name = "micro"; // will not give error, but also not get modify
console.log(JsUser["name"]); 

JsUser.greeting = function(){  //before adding anything in JsUser, comment Object.freeze(JsUser)
    console.log("Hello JS user");
};
JsUser.greeting();
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name} `);
}
JsUser.greeting2();