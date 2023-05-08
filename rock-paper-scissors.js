function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';

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

getComputerChoice();