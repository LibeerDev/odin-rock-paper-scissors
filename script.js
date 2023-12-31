let playerScore = 0;
let computerScore = 0;

const body = document.body;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const character = document.querySelector(".character");
const robot = document.querySelector(".robot");
const buttonsDiv = document.querySelector(".buttonsDiv");
const startButton = document.querySelector('.startGameButton')
const resultsDiv = document.querySelector('.displayResults');
const scoreDiv = document.querySelector('.displayScore');
const header = document.querySelector('.header');
const resetButton = document.querySelector('.resetButton');

const victoryImg = document.querySelector('.victoryImg');
const playerResultImg = document.querySelector('.playerResultImg');
const computerResultImg = document.querySelector('.computerResultImg');
const defeatImg = document.querySelector('.defeatImg')

const rockSound = new Audio('sounds/rock.mp3');
const paperSound = new Audio('sounds/paper.mp3');
const scissorsSound = new Audio('sounds/scissors.mp3');
const victoryScreenMusic = new Audio('sounds/victory_music.mp3');
const defeatScreenMusic = new Audio('sounds/defeat_music.mp3');
const buttonClickSound = new Audio('sounds/boom_click.mp3');
const backgroundMusic = new Audio('sounds/apocalyptic_music.mp3');
const defeatVoice = new Audio('sounds/defeat_voice.mp3');
const victoryVoice = new Audio('sounds/victory_voice.mp3');
const wonSound = new Audio('sounds/won.mp3');
const lostSound= new Audio('sounds/lost.mp3');
const tieSound= new Audio('sounds/tie.mp3');

// Load the audio files
defeatVoice.load();
victoryVoice.load();
rockSound.load();
paperSound.load();
scissorsSound.load();
victoryScreenMusic.load();
defeatScreenMusic.load();
buttonClickSound.load();
backgroundMusic.load();

// List of image URLs to preload
const imageUrls = [
    "images/wasteland.avif",
    "images/rock.png",
    "images/paper.jpg",
    "images/scissors.png",
    "images/victory_img.jpg",
    "images/defeat_img.jpg"
];

// Preload images function
function preloadImages() {
    const preloadDiv = document.getElementById("preload-images");
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        preloadDiv.appendChild(img);
    });
}

// Call the preloadImages function when the page loads
window.onload = preloadImages;


defeatScreenMusic.volume = 0.5;
backgroundMusic.volume = 0.5;


// listeners
rock.addEventListener('click', () => playRound("rock"));
paper.addEventListener('click', () => playRound("paper"));
scissors.addEventListener('click', () => playRound("scissors"));
startButton.addEventListener('click', () => loadGame());
resetButton.addEventListener('click', () => resetGame());

function resetGame() {

    location.reload();
}

wonSound.currentTime = 0.3;

function playAudioWithCallback(audioElement, callback) {
    audioElement.play();
    audioElement.addEventListener('ended', () => {
        callback();
    });
}

function loadGame(){

    backgroundMusic.play();
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

    computerResultImg.style.display = 'flex';
    playerResultImg.style.display = 'flex';

    // the game begins
    if (playerSelection === "rock" && computerSelection === "rock") {
        playAudioWithCallback(rockSound);
        resultsDiv.textContent = "Rock meets rock. It's a tie.";
        updateResultImgs("rock", "rock");
        playAudioWithCallback(tieSound);
        resultsDiv.style.color = "lightgrey";

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        playAudioWithCallback(rockSound);
        resultsDiv.textContent = "Rock meets paper. You lose!";
        computerScore += 1;
        updateResultImgs("rock", "paper");
        playAudioWithCallback(lostSound);
        resultsDiv.style.color = "#ffcccb";

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playAudioWithCallback(rockSound);
        resultsDiv.textContent = "Rock meets scissors. You win!";
        playerScore += 1;
        updateResultImgs("rock", "scissors");
        playAudioWithCallback(wonSound);
        resultsDiv.style.color = "lightgreen";

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        playAudioWithCallback(paperSound);
        resultsDiv.textContent = "Paper meets scissors. You lose!";
        computerScore += 1;
        updateResultImgs("paper", "scissors");
        playAudioWithCallback(lostSound);
        resultsDiv.style.color = "#ffcccb";

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playAudioWithCallback(paperSound);
        updateResultImgs("paper", "rock");
        resultsDiv.textContent = "Paper meets rock. You win!";
        playerScore += 1;
        playAudioWithCallback(wonSound);
        resultsDiv.style.color = "lightgreen";

    } else if (playerSelection === "paper" && computerSelection === "paper") {
        playAudioWithCallback(paperSound);
        resultsDiv.textContent = "paper meets paper. It's a tie!";
        playAudioWithCallback(tieSound);
        updateResultImgs("paper", "paper");
        resultsDiv.style.color = "lightgrey";

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        playAudioWithCallback(scissorsSound);
        resultsDiv.textContent = "Scissors meet rock. You lose!";
        computerScore += 1;
        updateResultImgs("scissors", "rock");
        playAudioWithCallback(lostSound);
        resultsDiv.style.color = "#ffcccb";

    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        playAudioWithCallback(scissorsSound);
        playAudioWithCallback(tieSound);
        resultsDiv.textContent = "Scissors meet scissors. It's a tie!";
        updateResultImgs("scissors", "scissors");
        resultsDiv.style.color = "lightgrey";
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
    playAudioWithCallback(scissorsSound);
    playAudioWithCallback(wonSound);
    resultsDiv.textContent = "Scissors meets paper. You win!";
    updateResultImgs("scissors", "paper");
    playerScore += 1;
    resultsDiv.style.color = "lightgreen";
    }

    scoreDiv.textContent = "";
    scoreDiv.textContent += playerScore + " : " + computerScore;
    scoreDiv.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
    scoreDiv.style.zIndex = "9999";

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

    function stopAllSounds() {
        const audioElements = document.querySelectorAll('audio');
        audioElements.forEach(audio => {
          audio.pause();
          audio.currentTime = 0; // Reset the playback position
        });
      }

      function victoryScreen() {
        stopAllSounds();
        backgroundMusic.pause();
        victoryImg.style.display = "block";
        victoryScreenMusic.currentTime = 2;
        victoryScreenMusic.play();
        resultsDiv.style.display = "block";
        resultsDiv.style.color = "#7cfc65";
        resultsDiv.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
        resultsDiv.textContent = "You have diminished the AI ego, they leave you alone, at least for now...";
        victoryVoice.play();
        resetButton.style.display = "block";
    }
    
    function defeatScreen() {
        stopAllSounds();
        backgroundMusic.pause();
        defeatScreenMusic.play();
        defeatImg.style.display = "block";
        resultsDiv.style.display = "block";
        resultsDiv.style.color = "#ff4f4f";
        resultsDiv.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
        resultsDiv.textContent = "The robots have beaten you in gamba, now they no longer need you.";
        defeatVoice.play();
        resetButton.style.display = "block";
    }
    

    function updateResultImgs(player, computer) {
        if (player === "rock") {
            playerResultImg.style.backgroundImage = "url(images/rock.png)";
        } else if (player === "paper") {
            playerResultImg.style.backgroundImage = "url(images/paper.jpg)";
        } else if (player === "scissors") {
            playerResultImg.style.backgroundImage = "url(images/scissors.png)";
        }
    
        if (computer === "rock") {
            computerResultImg.style.backgroundImage = "url(images/rock.png)";
        } else if (computer === "paper") {
            computerResultImg.style.backgroundImage = "url(images/paper.jpg)";
        } else if (computer === "scissors") {
            computerResultImg.style.backgroundImage = "url(images/scissors.png)";
        }
    }

}
