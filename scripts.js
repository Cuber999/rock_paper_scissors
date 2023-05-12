function getComputerChoice() {
    let x = Math.floor(3 * Math.random());
    if (x == 0) {
        return 'Rock';
    } else if (x == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if ((playerSelection === 'paper' && computerSelection === 'scissors')
    || (playerSelection === 'rock' && computerSelection === 'paper')
    || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return -1;
    } else if (playerSelection === computerSelection) {
        return 0;
    } else {
        return 1;
    }
}

function game() {

}