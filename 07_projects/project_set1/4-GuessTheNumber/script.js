form = document.querySelector('form');

let num = Math.floor((Math.random() * 100 + 1));
console.log(`The number you are want to guess is ${num}`);

var remaining = 10;

let prevGuess = [];


form.addEventListener('submit', (e) => {
    e.preverDefault();

    const guess = parseInt(document.querySelector('.guessField').value);

    const guesses = document.querySelector('.guesses');

    const lastResult = document.querySelector('.lastResult');

    const lowOrHi = document.querySelector('lowOrHi');



    const basic = () => {
        prev = prevGuess.join(', ');
        prevGuess.push(guess);
        guesses.textContent = prev;

        remaining = remaining - 1;

    }

    if (guess > 100 || guess < 1 || isNaN(guess) || guess === '') {
        console.log(`Please enter a valid guess : ${guess}`);
    } else if (guess === num) {
        basic();
        console.log(`you guessed it : ${guess}`);

    }
    else {
        basic();



    }

})
