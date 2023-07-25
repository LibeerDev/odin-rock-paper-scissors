function getComputerChoice()
{
    let choices = ["Rock", "Paper", "Scissors"];
    return computerSelection = choices[Math.floor(Math.random() * 3)].toLowerCase();      
}

function getPlayerChoice()
{
    let playerSelection = prompt("Choose either rock, paper or scissors!").toLowerCase();

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors")
    {
        console.log('Error! Write either "rock", "paper" or "scissors"');
    }

    return playerSelection;
}

function playRound()
{
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    // the game begins
    if (playerSelection === "rock" && computerSelection === "rock")
    {
        return "Rock meets rock. It's a tie.";y
    }

    else if (playerSelection === "rock" && computerSelection === "paper")
    {
        return "Rock meets paper. You lose!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors")
    {
        return "Rock meets scissors. You win!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors")
    {
        return "Paper meets scissors. You lose!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock")
    {
        return "Paper meets rock. You win!";
    }
    else if (playerSelection === "paper" && computerSelection === "paper")
    {
        return "Scissors meet paper. You win!";
    }

    else if (playerSelection === "scissors" && computerSelection === "rock")
    {
        return "Scissors meet rock. You lose!";
    }

    else if (playerSelection === "scissors" && computerSelection === "scissors")
    {
        return "Scissors meet scissors. It's a tie!";
    }


}

playRound();