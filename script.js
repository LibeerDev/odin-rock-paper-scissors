let playerScore = 0;
let computerScore = 0;


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const character = document.querySelector(".character");
const robot = document.querySelector(".robot");
const backgroundMusic = document.querySelector(".bgMusic");
const buttonsDiv = document.querySelector(".buttonsDiv");
const startButton = document.querySelector('.startGameButton')
const resultsDiv = document.querySelector('.displayResults');
const scoreDiv = document.querySelector('.displayScore');
const header = document.querySelector('.header')
const rockSound = document.querySelector('.rockSound');
const paperSound = document.querySelector('.paperSound');
const scissorsSound = document.querySelector('.scissorsSound');
const victoryScreenMusic = document.querySelector('.victoryScreenSound')
const defeatScreenMusic = document.querySelector('.defeatScreenSound')
const buttonClickSound = document.querySelector('.buttonClickSound')

rock.addEventListener('click', () => playRound("rock"));
paper.addEventListener('click', () => playRound("paper"));
scissors.addEventListener('click', () => playRound("scissors"));
startButton.addEventListener('click', () => loadGame());

function playMusic(){
    backgroundMusic.play();
}

function stopMusic(){
    backgroundMusic.pause();
}

function loadGame(){

    playMusic();
    buttonClickSound.play();
    buttonClickSound.volume -= 0.5;
    startButton.style.display = 'none';
    header.style.display = 'none';

    character.style.display = 'block';
    character.classList.add('animated');
    character.style.opacity = '100%';

    robot.style.display = 'block';
    robot.classList.add('animated');
    robot.style.opacity = '100%';

    rock.style.display = 'flex';
    paper.style.display = 'flex';
    scissors.style.display = 'flex';

}

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
        rockSound.play();
        resultsDiv.textContent = "Rock meets rock. It's a tie.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        rockSound.play();
        resultsDiv.textContent = "Rock meets paper. You lose!";
        computerScore += 1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        rockSound.play();
        resultsDiv.textContent = "Rock meets scissors. You win!";
        playerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        paperSound.play();
        resultsDiv.textContent = "Paper meets scissors. You lose!";
        computerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        paperSound.play();
        resultsDiv.textContent = "Paper meets rock. You win!";
        playerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        paperSound.play();
        resultsDiv.textContent = "Scissors meet paper. You win!";
        playerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        scissorsSound.play();
        resultsDiv.textContent = "Scissors meet rock. You lose!";
        computerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        scissorsSound.play();
        resultsDiv.textContent = "Scissors meet scissors. It's a tie!";
    }

    scoreDiv.textContent = "";
    scoreDiv.textContent += "\nPlayer score: " + playerScore + "    Computer score: " + computerScore;

    if (playerScore >= 5) {
        const allElements = document.querySelectorAll('body *');
        allElements.forEach(element => element.style.display = "none");
        resultsDiv.textContent = "The humanity is now safe from AIs, congratulations for the win human";
        victoryScreen();
    }

    if (computerScore >= 5) {
        const allElements = document.querySelectorAll('body *');
        allElements.forEach(element => element.style.display = "none");
        defeatScreen();
        
    }

    function victoryScreen(){
        stopMusic();
        resultsDiv.style.display = "block";
        resultsDiv.style.color = "yellow";
        victoryScreenMusic.play();
        resultsDiv.textContent = "You have dimished the AI ego, they leave you alone, at least for now...";
        
    }

    function defeatScreen(){
        stopMusic();
        defeatScreenMusic.play();
        resultsDiv.textContent = "The robots created by Sam Altman have taken over the world, you have lost the battle";
    }

}
