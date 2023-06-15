/*
Donovan Narvaez
This program will play 5 rounds of rock paper scissors.
*/

let computerScore = 0;
let playerScore = 0;

const para = document.querySelector('p');
const btns = document.querySelectorAll('btn');

// This function gets the computer's choice via rng.
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// This function get the player's choice via clicking a button.
function getPlayerChoice() {
let playerChoice = '';
    btns.forEach((button) => {
        button.addEventListener('click', () => {
            playerChoice.textContent = button.id;
            return playerChoice;
        });
    });
}

// This function plays a round of rps and returns a win/loss/draw string.
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw!";
    } else if (playerChoice !== computerChoice) {
        if ((playerChoice === "Rock") && (computerChoice === "Paper")) {
            computerScore += 1;
            return "You lose! Paper beats Rock";
        } else if ((playerChoice === "Paper") && (computerChoice === "Scissors")) {
            computerScore += 1;
            return "You lose! Scissors beats Paper";
        } else if ((playerChoice === "Scissors") && (computerChoice === "Rock")) {
            computerScore += 1;
            return "You lose! Rock beats Scissors";

        } else if ((playerChoice === "Rock") && (computerChoice === "Scissors")) {
            playerScore += 1;
            return "You win! Rock beats Scissors";
        } else if ((playerChoice === "Paper") && (computerChoice === "Rock")) {
            playerScore += 1;
            return "You win! Paper beats Rock";
        } else if ((playerChoice === "Scissors") && (computerChoice === "Paper")) {
            playerScore += 1;
            return "You win! Scissors beats Paper";
        }
    }
}

// This function plays a game of rps and decides a winner.
function getDecision(numRounds, totalRounds, playerChoice, computerChoice) {
    while (numRounds < totalRounds) {
        console.log(playRound(playerChoice, computerChoice));
        numRounds ++;
    }
    if (computerScore > playerScore) {
        return `Computer wins! ${computerScore} to ${playerScore}!`;
    } else {
        return `Player wins! ${playerScore} to ${computerScore}!`;
    }
}

// This function brings all the other functions together.
function playGame() {
    let numRounds = 0;
    let totalRounds = 5;

    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    getRounds(numRounds, totalRounds);
    playRound(playerChoice, computerChoice);
    getDecision(numRounds, totalRounds, playerChoice, computerChoice);
}