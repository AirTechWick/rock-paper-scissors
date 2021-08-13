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

    if (computerSelection == "rock" && playerSelection.toLowerCase() == "paper") {
        return "Player Wins! Paper beats Rock.";
    }

    if (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors")
    {
        return "Computer Wins! Rock beats Scissors.";
    }

    if (computerSelection == "paper" && playerSelection.toLowerCase() == "scissors")
    {
        return "Player Wins! Scissors beats Paper.";
    }

    if (computerSelection == "paper" && playerSelection.toLowerCase() == "rock")
    {
        return "Computer Wins! Paper beats Rock.";
    }

    if (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock")
    {
        return "Player Wins! Rock beats Scissors.";
    }

    if (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper")
    {
        return "Computer Wins! Scissors beats Paper.";
    }

    else
    {
        return "Error: Not a Valid Game";
    }


}

function game()
{
    
    let userInput = "";

        while(userInput.toLowerCase() != "rock" && userInput.toLowerCase() != "paper" && userInput.toLowerCase() != "scissors")
        {
            userInput = prompt("Type in Rock, Paper, or Scissors", "Type Here");

            if (userInput.toLowerCase() != "rock" && userInput.toLowerCase() != "paper" && userInput.toLowerCase() != "scissors")
            {
                alert("Error: Please enter a correct input")
            }
        }

        let cpuInput = computerPlay();

        let result = playRound(userInput,cpuInput);

        console.log(result);
}

// Event Listeners

const rockBtn = document.querySelector('.rockButton');

rockBtn.addEventListener('click', function(e) 
    {
        let gameResults = playRound("rock",computerPlay());

        let text = document.querySelector('.resultsText').textContent = gameResults;
    }
);

const paperBtn = document.querySelector('.paperButton');

paperBtn.addEventListener('click', function(e) 
    {
        let gameResults = playRound("paper", computerPlay());

        document.querySelector('.resultsText').textContent = gameResults;
    }
);

const scissorsBtn = document.querySelector('.scissorsButton');

scissorsBtn.addEventListener('click', function(e) 
    {
        let gameResults = playRound("scissors", computerPlay());

        document.querySelector('.resultsText').textContent = gameResults;
    }
);
 