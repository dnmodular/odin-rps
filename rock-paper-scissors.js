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
        console.log("Draw!");
    } else if (playerSelection !== computerSelection) {
        if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
            console.log("You lose! Paper beats Rock");
        } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
            console.log("You lose! Scissors beats Paper");
        } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
            console.log("You lose! Rock beats Scissors");

        } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
            console.log("You win! Rock beats Scissors");
        } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
            console.log("You win! Paper beats Rock");
        } else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
            console.log("You win! Scissors beats Paper");
        }
    }
}

function game(x, y) {
    let numRounds = 0;

    while (numRounds < 5) {
        getComputerChoice();
        playRound(x, y);
        numRounds ++;
    }

    return "Game Over!";
}

const playerSelection = prompt();
let computerSelection = getComputerChoice();
console.log(game(playerSelection, computerSelection));