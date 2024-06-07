"use strict";

// console.log(document.querySelector(`.message`).textContent);
// console.log(`hi`);
// document.querySelector(`.number`).textContent = 20;
// document.querySelector(`.between`).textContent = "(Between 1 - 30)";

let secretNumber = Math.trunc(Math.random() * 10 + 1);

let score = 10;
let highScore = 0
let prevHighScore = 0
let prevTries = 0

document.querySelector(`.check`).addEventListener(`click`, function () {
    const guess = Number(document.querySelector(`.guess`).value);
    console.log(score, document.querySelector(`.message`).textContent);
    
    if (!guess) {
        document.querySelector(`.message`).textContent = `⛔️ No number!`;
    } else if (score === 0) {
        document.querySelector(`.message`).textContent = `Game Over`;
        document.querySelector(`body`).style.backgroundColor = `red`;
    } else if (guess === secretNumber) {
        const tries = 10 - score;
        document.querySelector(`.message`).textContent = `🥳 Correct Number!`;
        document.querySelector(`body`).style.backgroundColor = `green`;
        document.querySelector(`.number`).textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            prevHighScore = highScore;
            prevTries = tries;
            document.querySelector(`.highscore`).innerHTML = `${highScore}<br>Guessed it in ${tries} tries`;
        }
       
    } else if (guess !== secretNumber) {
        document.querySelector(`.message`).textContent = guess > secretNumber ? `Number to high` : `Number to low`;
        score--;
        document.querySelector(`.score`).textContent = score;
        document.querySelector(`body`).style.backgroundColor = `#222`;
        document.querySelector(`.number`).textContent = `?`;
          
    }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    score = 10;
    secretNumber = Math.trunc(Math.random() * 10 + 1);
    const message = `Game restarted...<br>Start guessing again.`;
    document.querySelector(`.message`).innerHTML = message;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.guess`).value= ``;
    document.querySelector(`.highscore`).innerHTML = `${prevHighScore}<br>Previously Guessed it in ${prevTries} tries`;
    
});

