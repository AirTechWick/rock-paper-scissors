// GLOBALS
let PLAYER = 0;
let COMPUTER = 0;


function computerPlay()
{
    let decisions = ["rock","paper","scissors"]; // all in lower case
    let randomIndex = getRandomInt(0,decisions.length);
    return decisions[randomIndex];
}

function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function playRound(playerSelection, computerSelection)
{

    if (computerSelection == playerSelection.toLowerCase())
    {
        return "It's a Tie!";
    }

    if (computerSelection == "rock" && playerSelection.toLowerCase() == "paper") 
    {
        
        addToPlayerScore();

        return "Player Wins! Paper beats Rock.";
    }

    if (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors")
    {
        addToComputerScore();

        return "Computer Wins! Rock beats Scissors.";
    }

    if (computerSelection == "paper" && playerSelection.toLowerCase() == "scissors")
    {
        addToPlayerScore();

        return "Player Wins! Scissors beats Paper.";
    }

    if (computerSelection == "paper" && playerSelection.toLowerCase() == "rock")
    {
        addToComputerScore();

        return "Computer Wins! Paper beats Rock.";
    }

    if (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock")
    {
        addToPlayerScore();

        return "Player Wins! Rock beats Scissors.";
    }

    if (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper")
    {

        addToComputerScore();

        return "Computer Wins! Scissors beats Paper.";
    }

    else
    {
        return "Error: Not a Valid Game";
    }
}

// Query Selectors

const rockBtn = document.querySelector('.rockButton');
const paperBtn = document.querySelector('.paperButton');
const scissorsBtn = document.querySelector('.scissorsButton');

function checkGame()
{
    const scoreToWin = 5;

    if (PLAYER == scoreToWin)
    {
        window.alert("Player Wins the Game!");

        PLAYER = 0;
        COMPUTER = 0;

    }

    if (COMPUTER == scoreToWin)
    {
        window.alert("Computer Wins the Game!");

        PLAYER = 0;
        COMPUTER = 0;
    }
}

function addToPlayerScore()
{
    PLAYER++;
}

function addToComputerScore()
{
    COMPUTER++;
}


// Event Listeners


rockBtn.addEventListener('click', function(e) 
    {
        const playerSelection = "rock";

        const computerSelection = computerPlay();

        let gameResults = playRound(playerSelection,computerSelection);

        document.querySelector('.playerResults').textContent = "Player: " + playerSelection;

        document.querySelector('.playerScore').textContent = "P " + PLAYER.toString();


        document.querySelector('.computerResults').textContent = "Computer: " + computerSelection;

        document.querySelector('.computerScore').textContent = "C " + COMPUTER.toString();



        document.querySelector('.resultsText').textContent = gameResults;

        checkGame();
    }
);


paperBtn.addEventListener('click', function(e) 
    {
        const playerSelection = "paper";

        const computerSelection = computerPlay();

        let gameResults = playRound(playerSelection, computerSelection);

        document.querySelector('.playerResults').textContent = "Player: " + playerSelection;

        document.querySelector('.playerScore').textContent = "P " + PLAYER.toString();


        document.querySelector('.computerResults').textContent = "Computer: " + computerSelection;

        document.querySelector('.computerScore').textContent = "C " + COMPUTER.toString();


        document.querySelector('.resultsText').textContent = gameResults;

        checkGame();
    }
);


scissorsBtn.addEventListener('click', function(e) 
    {
        const playerSelection = "scissors";

        const computerSelection = computerPlay();

        let gameResults = playRound(playerSelection, computerSelection);

        document.querySelector('.playerResults').textContent = "Player: " + playerSelection;

        document.querySelector('.playerScore').textContent = "P " + PLAYER.toString();



        document.querySelector('.computerResults').textContent = "Computer: " + computerSelection;

        document.querySelector('.computerScore').textContent = "C " + COMPUTER.toString();


        document.querySelector('.resultsText').textContent = gameResults;
    
        checkGame();
    }
);
