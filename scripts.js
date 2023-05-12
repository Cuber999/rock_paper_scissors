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