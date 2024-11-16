// Immediately Invoked Function Expressions (IIFE

(function subh(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();  // We created a block using () and then we used () to run it . (function)().

// we can also do this 
( (name) => {
    //un named IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})('Sourabh')

