const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async task is complete");
        resolve(); // Fulfill the promise after async task completion.
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise Consumed");
});

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("async task2");
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved");
});

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: 'subh', email: 'subh@example.com'});
    }, 1000);
})

promiseThree.then(function(user) {
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error){
            resolve({username: 'subh', password: 123});
        }
        else{
            reject('ERROR: something went wrong');
        }
    }, 1000);
}); 

// Chaining
// promiseFour.then( (user) => {
//         console.log(user);
//         return user.username;
// }).then( (username) => {
//     console.log(username);
// }).catch( (err) => {
//     console.error(err);
// });

// For better readability

promiseFour
.then( (user) => {
            console.log(user);
            return user.username;
})
.then( (username) => {
        console.log(username);
})
.catch( (err) => {
        console.error(err);
})
.finally(() => {
        console.log("The Promise is either resolved or rejected");
});

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;if(!error){
            resolve({username: 'javascript', password: 123});
        }
        else{
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const user = await promiseFive;
        console.log(user);
    }
    catch(err){
        console.error(err);
    }

};

consumePromiseFive();

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); // we will get data in string and typeconverting to json format.... and we are using await here cuz converting takes time.
        console.log(data);
    }
    catch(err){
        console.error("E: ", err);
    }
}

// getAllUsers();

fetch('https://api.github.com/users/user69x69')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('E:', error));