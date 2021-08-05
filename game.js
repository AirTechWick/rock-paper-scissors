function computerPlay(){
    let decisions = ["rock","paper","scissors"]; // all in lower case
    let randomIndex = getRandomInt(0,decisions.length);
    return decisions[randomIndex];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function playRound(playerSelection, computerSelection){

    if (computerSelection == playerSelection)
    {
        return "It's a Tie!";
    }

    if (computerSelection.toLowerCase() == "rock" && playerSelection == "paper") {
        return "Player Wins! Paper beats Rock.";
    }

    if (computerSelection.toLowerCase() == "rock" && playerSelection == "scissors")
    {
        return "Computer Wins! Rock beats Scissors.";
    }

    if (computerSelection.toLowerCase() == "paper" && playerSelection == "scissors")
    {
        return "Player Wins! Scissors beats Paper.";
    }

    if (computerSelection.toLowerCase() == "paper" && playerSelection == "rock")
    {
        return "Computer Wins! Paper beats Rock.";
    }

    if (computerSelection.toLowerCase() == "scissors" && playerSelection == "rock")
    {
        return "Player Wins! Rock beats Scissors.";
    }

    if (computerSelection.toLowerCase() == "scissors" && playerSelection == "paper")
    {
        return "Computer Wins! Scissors beats Paper.";
    }
}

const playerSelection = "scissors";
const computerSelection = computerPlay();

console.log("player: " + playerSelection);
console.log("computer: " + computerSelection);

let round = playRound(playerSelection,computerSelection);

console.log(round);