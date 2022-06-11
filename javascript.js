function computerPlay() {
    const list = ['Rock', 'Paper', 'Scissors'];
    const computerPick =  list[Math.floor(Math.random()*3)];
    return computerPick;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = 'It\'s a tie' ;
    }
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            result.textContent = 'You lose. Paper beats Rock.';
            computerScore += 1; }
        else {
            result.textContent = 'You win. Rock beats scissors.'; 
            playerScore += 1; }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            result.textContent = 'You lose. Scissors beats paper.';
            computerScore += 1; }
        else {
            result.textContent = 'You win. Paper beats rock.';
            playerScore += 1; }
    }
    else {
        if (computerSelection === 'Rock') {
            result.textContent = 'You lose. Rock beats scissors.'; 
            computerScore += 1; }
        else {
            result.textContent = 'You win. Scissors beats paper.'; 
            playerScore += 1; }
    }
    score.textContent = `You: ${playerScore} Computer: ${computerScore} `;
    if (playerScore === 5){
        score.textContent += 'You win!';}
    else if (computerScore === 5) {
        score.textContent += 'Computer wins!'}
}

const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', function() {playRound(this.id, computerPlay())}));

const result = document.createElement('div');
document.body.appendChild(result);
result.textContent = 'Let the game begin';

const score = document.createElement('div');
document.body.appendChild(score);
let playerScore = 0;
let computerScore = 0;