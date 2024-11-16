// for of

const arr = [1, 2, 3, 4, 5, 6];

// forof loop
// for (const num of arr) {
//     console.log(num);
// }

// maps
const map = new Map();
// console.log(map);

map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('FR', 'FRANCE');

// for (const [key, val] of map) {
//     console.log(`${key} :- ${val}`);
// }

const myObject = {
    game1: 'NFS',
    game2: 'spiderman'
}

for (const [key, value] of myObject) { // object not iterable
    console.log(`${key} :- ${val}`);  
}
