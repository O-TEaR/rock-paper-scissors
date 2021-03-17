let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function computerplay() {
    function numPick(){ 
        let numberGenerator = Math.floor(Math.random() * 3) + 1; 
        
        switch (numberGenerator) { 
        case 1: 
            return 'rock';
            break;
        case 2: 
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        }
    }
    return numPick();
}

function playRound(playerSelection, computerSelection) { 
    switch (true) { 
         case playerSelection.toLowerCase() == computerSelection: 
             return 'Tie.'; 
             break; // 
         case playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors' || 
         playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock' || 
         playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper':
            return 'You won!';
             break;
        case playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper' ||
        playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors' ||
        playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock':
             return 'You lost.';
             break;
        default:
             return 'Something went wrong. Make sure you enter a valid input.';
             break;
        }
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    game();
}); 

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    game();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'paper';
    game();
});

const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const tie = document.querySelector('#tie');

function scores(text) {
        if (text == 'You won!' && playerScore != 5) {
            playerScore += 1;
            player.textContent = `Player: ${playerScore}`;
        }
        else if (text == 'You lost.' && computerScore != 5) {
            computerScore += 1;
            computer.textContent = `Computer: ${computerScore}`;
        }
        else if (text == 'Tie.') {
            tieScore += 1;
            tie.textContent = `Tie: ${tieScore}`;
        }
    // console.log(playerScore, computerScore, tieScore);
}

function check() {
    if (playerScore == 5) {
        alert('You beat the AI!');
    }
    else if (computerScore == 5) {
        alert('You got beat by an AI.');
    }
}

function game() {
    const computerSelection = computerplay();
    playRound(playerSelection, computerSelection);
    const div = document.createElement('div');
    div.textContent = playRound(playerSelection, computerSelection);
    resultsContainer.appendChild(div);
    text = div.textContent;
    scores(text);
    check();
}