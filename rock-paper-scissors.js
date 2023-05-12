/*
Donovan Narvaez
This program will play 5 rounds of rock paper scissors.
*/

// This function gets the computer's choice via rng.
function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    let computerChoice = '';
    if (randomNumber === 1) {
        computerChoice = rock;
    } else if (randomNumber === 2) {
        computerChoice = paper;
    } else if (randomNumber === 3) {
        computerChoice = scissors;
    }
    return computerChoice;
}

// This function plays a round of rps and returns a win/loss/draw string.
function playRound(computerSelection) {
    
    let playerSelection = prompt('rock paper or scissors?');

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection !== computerSelection) {
        if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
            return "You lose! Paper beats Rock";
        } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
            return "You lose! Scissors beats Paper";
        } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
            return "You lose! Rock beats Scissors";

        } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
            return "You win! Rock beats Scissors";
        } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
            return "You win! Paper beats Rock";
        } else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
            return "You win! Scissors beats Paper";
        }
    }
}

// This function brings all the other functions
// together to play 5 rounds of rps and decides a winner.
function game(x, y) {
    for (let numRounds = 0; numRounds < 5; numRounds ++) {
        playRound(x, y);
       
    }

    return 0;
}

const computerSelection = getComputerChoice();
console.log(game(playerSelection, computerSelection));