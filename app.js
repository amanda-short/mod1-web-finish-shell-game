/* Imports */
import { getRandomNumber } from './utils.js';

/* State */
// let gameState = 'guess';
let totalGuess = 0;
let correctGuess = 0;

const covered = ['shellL', 'shellM', 'shellR'];

const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');

const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const total = document.getElementById('total');

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

/* Actions */
function loadPage() {}

/* Components */

/* Component */
// get DOM
// display
// event listeners
guess1.addEventListener('click', () => {
    getRandomNumber();
    const answer = covered[getRandomNumber];
    displayShells(answer, 'shellL');

    if (userGuess === 1) {
        pearl1.classList.add('reveal');
    }
    else if (userGuess === 2) {
        pearl2.classList.add('reveal');
    }
    else {
        pearl3.classList.add('reveal');
    }
});

function displayShells(userGuess, correctSpot) {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
    totalGuess++;
}

/* Run page load code */
loadPage();


