const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// cancatenation
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// Spread Operator
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]];
const real_another_array = another_array.flat(Infinity); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(Array.isArray(["Sourabh"])); // returns true if specified is an array.

console.log(Array.from("Sourabh")); // make array from specified
console.log(Array.from({name: "Sourabh"})) // return empty array. because it is key value pair.
// console.log(Array.from({name: "Sourabh"}))


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //retruns new array with spcified elements.