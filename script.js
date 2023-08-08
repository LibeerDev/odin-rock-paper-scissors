let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener('click', () => playRound("rock"));
paper.addEventListener('click', () => playRound("paper"));
scissors.addEventListener('click', () => playRound("scissors"));

const resultsDiv = document.querySelector('.displayResults');
const scoreDiv = document.querySelector('.displayScore');

function getComputerChoice()
{
    let choices = ["Rock", "Paper", "Scissors"];
    return computerSelection = choices[Math.floor(Math.random() * 3)].toLowerCase();      
}

function playRound(choice)
{
    let computerSelection = getComputerChoice();
    let playerSelection = choice;

    // the game begins
    if (playerSelection === "rock" && computerSelection === "rock") {
        resultsDiv.textContent = "Rock meets rock. It's a tie.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        resultsDiv.textContent = "Rock meets paper. You lose!";
        computerScore += 1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        resultsDiv.textContent = "Rock meets scissors. You win!";
        playerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        resultsDiv.textContent = "Paper meets scissors. You lose!";
        computerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        resultsDiv.textContent = "Paper meets rock. You win!";
        playerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        resultsDiv.textContent = "Scissors meet paper. You win!";
        playerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        resultsDiv.textContent = "Scissors meet rock. You lose!";
        computerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        resultsDiv.textContent = "Scissors meet scissors. It's a tie!";
    }

    scoreDiv.textContent = "";
    scoreDiv.textContent += "\nPlayer score: " + playerScore + "    Computer score: " + computerScore;

    if (playerScore >= 5) {
        resultsDiv.textContent = "The humanity is now safe from AIs, congratulations for the win human";
    }

    if (computerScore >= 5) {
        resultsDiv.textContent = "The robots created by Sam Altman have taken over the world, you have lost the battle";
    }

}
