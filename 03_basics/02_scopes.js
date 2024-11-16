if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);   //will give error
// console.log(b);   //will give error
console.log(c);

// +++++++++++++++++++ interesting +++++++++++++++++++

addone(5);
function addone(num){
    return num + 1;
}

addtwo(5); // can't use this before the function declaration.
const addtwo = function(num){
    return num2 + 2
}

