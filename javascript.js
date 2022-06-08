function computerPlay() {
    const list = ['Rock', 'Paper', 'Scissors'];
    const computerPick =  list[Math.floor(Math.random()*3)];
    return computerPick;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase()+playerSelection.slice(1).toLowerCase();
    if (playerSelection === computerSelection) {
        return 'It\'s a tie' ;
    }
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            winloss -= 1;
            return 'You lose. Paper beats Rock.';
        }
        else {
            winloss += 1;
            return 'You win. Rock beats scissors.';
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            winloss -= 1;
            return 'You lose. Scissors beats paper.';
        }
        else {
            winloss += 1;
            return 'You win. Paper beats rock.';
        }
    }
    else {
        if (computerSelection === 'Rock') {
            winloss -= 1;
            return 'You lose. Rock beats scissors.';
        }
        else {
            winloss += 1;
            return 'You win. Scissors beats paper.';
        }
    }
}

function game() {
    for (let i=0; i<5; i++) {
        playerSelection = prompt("Enter your choice:");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    let result = (winloss = 0) ? 'TIE' : (winloss>0) ? 'YOU WIN' : 'YOU LOSE' ;
    return result;
}

let winloss = 0;