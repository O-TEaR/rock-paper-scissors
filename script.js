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