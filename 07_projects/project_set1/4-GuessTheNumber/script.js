const form = document.querySelector('.form');
const guessField = document.querySelector('#guessField');
const submit = document.querySelector('.subt');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

let randomNumber = Math.floor((Math.random() * 100)) + 1;

let para = document.createElement('p');

console.log(randomNumber);

let playGame = true;

let numGuesses = 1;

if(playGame){
    form.addEventListener('submit', run);
}

function run(e){
    e.preventDefault();

    console.log(randomNumber);
    let guess = parseInt(guessField.value);
    parseInt(validateGuess(guess));
}

function validateGuess(guess){
    if ( isNaN(guess)){
        alert('please enter a valid value.');
        guessField.value = '';
    }
    else if(guess < 1){
        alert('please enter a number more than 0.');
        guessField.value = '';
    }else if(guess > 100){
        alert('please enter a number less than 100.');
    }else{
        
        if (numGuesses === 10){
            updateInfo(guess);
            checkGuess(guess);
            displayMessages(`Game Over, Random Number was ${randomNumber}`)
            endGame();
        }else{
            updateInfo(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMessages(`you guessed it right.`);
        endGame();
    }else if (guess < randomNumber){
        displayMessages(`Number is Tooo low`);
    }else if (guess > randomNumber){
        displayMessages(`Number is Tooo high`);
    }
}

function updateInfo(guess){
    guessField.value = '';
    guesses.innerHTML += `${guess} `;
    lastResult.innerHTML = `${10- numGuesses}`;
    numGuesses++;
}

function showGuesses(guess){
    //
}

function displayMessages(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame(){
    guessField.value = '';
    guessField.setAttribute('disabled', '');
    para.classList.add('button');
    para.innerHTML = '<h1 id="newGame">New Game</h1>';
    resultParas.appendChild(para);

    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        randomNumber = Math.floor((Math.random() * 100)) + 1;
        guessField.value = '';
        guessField.removeAttribute('disabled');
        resultParas.removeChild(para);
        numGuesses = 1;
        lastResult.innerHTML = 10;

        guesses.innerHTML = '';

        playGame = true;
    });
}
