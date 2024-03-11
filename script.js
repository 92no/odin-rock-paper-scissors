"use strict";

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
function playRound(playerSelection, computerSelection) {
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

// Play a game of rock paper scissors, consisting of five rounds
// Keeps track of the record
function playGame() {
  let playerWin = 0;
  let playerLose = 0;
  // Play five rounds of rock paper scissors
  for (let i = 0; i < 5; i++) {
    // Get user choice as string
    let playerSelection = prompt("Rock, Paper or Scissors").toLowerCase();

    // Get computer choice
    let computerSelection = getComputerChoice();

    // Save output of a round in variable result
    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    // Check if player wins or looses and track scores
    if (result.includes("Win")) {
      playerWin++;
    } else if (result.includes("Lose")) {
      playerLose++;
    }
    console.log(`Player: ${playerWin} // Computer: ${playerLose}`);
  }
}

// Test
playGame();
