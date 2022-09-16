/* Imports */
import { getRandomNumber } from './utils.js';


/* State */
let gameState = 'guess';
let userGuess = '';
let totalGuess = 0;
let correctGuess = 0;

const covered = ['shellL', 'shellM', 'shellR'];

const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

/* Actions */
function loadPage() {
    displayShells();

}

/* Components */

/* Component */
// get DOM
// display
// event listeners
guess1.addEventListener('click', () => {
    getRandomNumber();
    const answer = covered[getRandomNumber];
    displayShells(answer, 'shellL');

    totalGuess++;

    if (userGuess === 1) {
        pearl1.classList.add('reveal');
        // correctGuess++;
    }
    else if (userGuess === 2) {
        pearl2.classList.add('reveal');
    }
    else {
        pearl3.classList.add('reveal');
    }
    winsEl.textContent = correctGuess;
    totalEl.textContent = totalGuess;
    lossesEl.textContent = totalGuess - correctGuess;

});

guess2.addEventListener('click', () => {
    getRandomNumber();
    const answer = covered[getRandomNumber];
    displayShells(answer, 'shellM');

    if (userGuess === 1) {
        pearl2.classList.add('reveal');
    }
    else if (userGuess === 2) {
        pearl3.classList.add('reveal');
    }
    else {
        pearl1.classList.add('reveal');
    }
    winsEl.textContent = correctGuess;
    totalEl.textContent = totalGuess;
    lossesEl.textContent = totalGuess - correctGuess;
});

guess3.addEventListener('click', () => {
    getRandomNumber();
    const answer = covered[getRandomNumber];
    displayShells(answer, 'shellR');

    if (userGuess === 1) {
        pearl3.classList.add('reveal');
    }
    else if (userGuess === 2) {
        pearl1.classList.add('reveal');
    }
    else {
        pearl2.classList.add('reveal');
    }
    winsEl.textContent = correctGuess;
    totalEl.textContent = totalGuess;
    lossesEl.textContent = totalGuess - correctGuess;
});

function displayShells(userGuess, results) {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
    totalGuess++;
    const correctHidingPlace = document.getElementById('wins');
console.log(userGuess, results)
    if (userGuess === results) {
        correctGuess++;
        correctHidingPlace.classList.add('reveal');
    } else if (userGuess === 2) {
        shell2.classList.add('reveal');
    }
    else {
        shell3.classList.add('reveal');
    }
}

/* Run page load code */
loadPage();


