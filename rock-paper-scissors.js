/*
Donovan Narvaez
This program will play 5 rounds of rock paper scissors.
*/

let computerScore = 0;
let playerScore = 0;

// This function gets the computer's choice via rng.
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// This function plays a round of rps and returns a win/loss/draw string.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection !== computerSelection) {
        if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
            computerScore += 1;
            return "You lose! Paper beats Rock";
        } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
            computerScore += 1;
            return "You lose! Scissors beats Paper";
        } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
            computerScore += 1;
            return "You lose! Rock beats Scissors";

        } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
            playerScore += 1;
            return "You win! Rock beats Scissors";
        } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
            playerScore += 1;
            return "You win! Paper beats Rock";
        } else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
            playerScore += 1;
            return "You win! Scissors beats Paper";
        }
    }
}

// This function brings all the other functions together.
function game() {
    
}

// This function plays 5 rounds and decides a winner.
function decision() {
    /*
    let numRounds = 0;

    while (numRounds < 5) {
        const playerSelection = prompt('rock paper or scissors?');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        numRounds ++;
    }
    */

    if (computerScore > playerScore) {
        return `Computer wins! ${computerScore} to ${playerScore}!`;
    } else {
        return `Player wins! ${playerScore} to ${computerScore}!`;
    }
}



console.log(game());