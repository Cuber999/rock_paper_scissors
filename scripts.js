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
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result > 0) {
            console.log('You won this round!');
            playerScore++;
        } else if (result < 0) {
            console.log('You lost this round!');
            computerScore++;
        } else {
            console.log('Tie!');
        }
    }
    if (playerScore > computerScore) {
        console.log('Game over. You won!');
    } else if (playerScore < computerScore) {
        console.log('Game over. You lost!');
    } else {
        console.log('Game over. Tie game!')
    }
    console.log(`Player: ${playerScore} Computer: ${computerScore}`);
}