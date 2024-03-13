"use strict";

// Labels and counter
let playerScore = 0;
let computerScore = 0;

const playerScoreLabel = document.querySelector("#playerScoreLabel");
const computerScoreLabel = document.querySelector("#computerScoreLabel");
const resultLabel = document.querySelector("#resultLabel");

// Random number chooses rock, paper or scissors
// Returns string rock, paper or scissors
function getComputerChoice() {
  // Get Random number: 0, 1, 2
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else if (num === 2) {
    return "scissors";
  }
}

// Play a single round of rock paper scissors
// Returns string with result of played round
function playRound(playerSelection, computerSelection) {
  // Check if game over and reset score
  if (playerScore === 5 || computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    playerScoreLabel.textContent = playerScore;
    computerScoreLabel.textContent = computerScore;
  }
  // Player chooses Rock
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "rock") {
      return "It's a Draw!";
    } else if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      return "You Win! Rock beats Scissors";
    }
  }
  // Player chooses Paper
  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "rock") {
      return "You Win! Paper beats Rock";
    } else if (computerSelection === "paper") {
      return "It's a Draw!";
    } else if (computerSelection === "scissors") {
      return "You Lose! Scissors beats Paper";
    }
  }
  // Player chooses Scissors
  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      return "You Win! Scissors beats Paper";
    } else if (computerSelection === "scissors") {
      return "It's a Draw!";
    }
  }
}

// Update playerscore and computerscore
function updateScore(result) {
  if (result.includes("Win")) {
    playerScore += 1;
    playerScoreLabel.textContent = playerScore;
  } else if (result.includes("Lose")) {
    computerScore += 1;
    computerScoreLabel.textContent = computerScore;
  }
  resultLabel.textContent = result;
}

// TODO Check if game won and reset game
function checkWinAndReset() {
  if (playerScore === 5) {
    resultLabel.textContent = "You Won! play again";
  } else if (computerScore === 5) {
    resultLabel.textContent = "You Lost! play again";
  }
}

// Buttons to play a round
// Rock Button
const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {
  let result = playRound("rock", getComputerChoice());
  updateScore(result);
  checkWinAndReset();
});

// Paper Button
const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
  let result = playRound("paper", getComputerChoice());
  updateScore(result);
  checkWinAndReset();
});

// Scissors Button
const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
  let result = playRound("scissors", getComputerChoice());
  updateScore(result);
  checkWinAndReset();
});
