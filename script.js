let playerScore = 0;
let computerScore = 0;

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
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("Rock meets rock. It's a tie.");
        console.log("Player score: " + playerScore + "    Computer score: " + computerScore);
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Rock meets paper. You lose!");
        computerScore += 1;
        console.log("Player score: " + playerScore + "    Computer score: " + computerScore);
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock meets scissors. You win!");
        playerScore += 1;
        console.log("Player score: " + playerScore + "    Computer score: " + computerScore);
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Paper meets scissors. You lose!");
        computerScore += 1;
        console.log("Player score: " + playerScore + "    Computer score: " + computerScore);
    }   
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Paper meets rock. You win!");
        playerScore += 1;
        console.log("Player score: " + playerScore + "    Computer score: " + computerScore);
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("Scissors meet paper. You win!");
        playerScore += 1;
        console.log("Player score: " + playerScore + "    Computer score: " + computerScore);
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Scissors meet rock. You lose!");
        computerScore += 1;

        console.log("Player score: " + playerScore + "    Computer score: " + computerScore);
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("Scissors meet scissors. It's a tie!");
        console.log("Player score: " + playerScore + "    Computer score: " + computerScore);
    }

}

function game()
{  
    for (let i = 0; i < 3; i++)
    {
        playRound();
    }

    if (computerScore > playerScore)
    {
        console.log("Computador wins :(");
    }

    else if (computerScore < playerScore)
    {
        console.log("You have beaten the Deep AI engine, congrats!");
    }
    
    else if (computerScore === playerScore)
    {
        console.log("It's a tie between the AI's and you, humanity is in chaos, but safe. For now...");
    }
}

game();