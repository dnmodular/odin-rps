function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    let computerChoice = '';
    if (randomNumber === 1) {
        computerChoice = rock;
    } else if (randomNumber === 2) {
        computerChoice = paper;
    } else if (randomNumber === 3) {
        computerChoice = scissors;
    }
    console.log(computerChoice);
    return computerChoice;
}

function gameStart(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
        alert("draw!");
    } else if (playerSelection !== computerSelection) {
        if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
            alert("You lose! Paper beats Rock");
        } else if ((playerSelection === 'Paper') && (computerSelection === 'Scissors')) {
            alert("You lose! Scissors beats Paper")
        } else if ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) {
            alert("You lose! Rock beats Scissors");

        } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
            alert("You win! Rock beats Scissors")
        } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
            alert("You win! Paper beats Rock")
        } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
            alert("You win! Scissors beats Paper");
        }
    }
}


gameStart('paper', getComputerChoice());