/*
Donovan Narvaez
This program will play 5 rounds of rock paper scissors.
*/
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

function playRound(playerSelection, computerSelection) {
    
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

function game(x, y) {
    for (let numRounds = 0; numRounds < 5; numRounds ++) {
        playRound(x, y);
       
    }

    return 0;
}

const playerSelection = prompt('rock paper or scissors?');
const computerSelection = getComputerChoice();
console.log(game(playerSelection, computerSelection));