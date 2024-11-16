const userEmail = []

if (userEmail) {
    console.log("Got user email.");
} else {
    console.log("Don't have user email.");
}

// falsy value

false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// truthy value 

"0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null underfined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 15;

console.log(val1)

// Ternary Operator

// condition ? true : false
const iceTeaprice = 100;
iceTeaprice >= 80 ? console.log("more than 80") : console.log("less than 80")