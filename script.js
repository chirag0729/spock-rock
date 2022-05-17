const playerScoreEl = document.getElementById('playerscore');
const playerChoiceEl = document.getElementById('playerchoice');
const computerScoreEl = document.getElementById('computerscore');
const computerChoiceEl = document.getElementById('computerchoice');
const resultText = document.getElementById('result-text');

const playerRock = document.getElementById('playerrock');
const playerPaper = document.getElementById('playerpaper');
const playerScissors = document.getElementById('playerscissor');
const playerLizard = document.getElementById('playerlizard');
const playerSpock = document.getElementById('playerspock');

const computerRock = document.getElementById('computerrock');
const computerPaper = document.getElementById('computerpaper');
const computerScissors = document.getElementById('computerscissor');
const computerLizard = document.getElementById('computerlizard');
const computerSpock = document.getElementById('computerspock');

const allGameIcons = document.querySelectorAll('.fa-regular');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

// reset all selected icons
function resetSelected() {
  allGameIcons.forEach((icons) => {
    icons.classList.remove('selected');
  });
}

// REset score and playerchoice / computer choice
function resetAll () {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}

// Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  switch (true) {
    case computerChoiceNumber < 0.2:
      computerChoice = 'rock'
      break;
    case computerChoiceNumber <= 0.4:
      computerChoice = 'paper'
      break;
    case computerChoiceNumber <= 0.6:
      computerChoice = 'scissors'
      break;
    case computerChoiceNumber <= 0.8:
      computerChoice = 'lizard'
      break;
    default:
      computerChoice = 'spock'
      break;
  }
}

// Add selected style and computer choice
function displayComputerChoice() {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = '---Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = '---Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = '---Scissor';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = '---Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = '---Spock';
      break;
    default:
      break;
  }
}

// Check result, increse scores, update resulttext
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie";
  } else {
    const choice = choices[playerChoice];
    console.log(choice.defeats.indexOf(computerChoice));
   if (choice.defeats.indexOf(computerChoice) > -1 ) {
     resultText.textContent = "You Won!"
     playerScoreNumber++;
     playerScoreEl.textContent = playerScoreNumber;
   } else {
     resultText.textContent = "You Loss!";
     computerScoreNumber++;
     computerScoreEl.textContent = computerScoreNumber;
   }
  }

} 

// Call functions to process turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}
// passing player selection value and stylng icons
function select(playerChoice) {
  checkResult(playerChoice);
  // add switch statement
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '---Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = '---Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = '---Scissor';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = '---Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = '---Spock';
      break;
    default:
      break;
  }
}

// On startup, 
resetAll();
