// arrays

const myArr1 = [0, 1, 2, 3, 4, 5];
const myheros = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2[2]);

// Array Methods
// myArr1.push(6);
// myArr1.push(7);
// myArr1.pop();

// myArr1.unshift(9);
// myArr1.unshift(10);
// myArr1.shift();

console.log(myArr1.includes(9)); // 9 avaiable in myArry1?
console.log(myArr1.indexOf(9));  // will show -1 because 9 isn't in myArray1

console.log(myArr1);

// arr.join()
// const newArray = myArr1.join("-");
// console.log(newArray);
// console.log(typeof newArray);

// slice, splice

console.log("A ", myArr1);

const myn1 = myArr1.slice(1,3)
console.log(myn1);

const myn2 = myArr1.splice(1,3) // removes element from array and return.
console.log(myn2);
console.log(myArr1);

