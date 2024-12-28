const body = document.body;

const container = document.createElement("div");

const rock = document.createElement("button");
rock.textContent = "Rock";
const paper = document.createElement("button")
paper.textContent = "Paper";
const scissors = document.createElement("button");
scissors.textContent = "Scissors";

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

body.appendChild(container);

container.addEventListener("click", (e) => {
  switch (e.target) {
    case rock:
      playRound("rock", computerChoice);
      computerChoice = getComputerChoice();
      break;

    case paper:
      playRound("paper", computerChoice);
      computerChoice = getComputerChoice();
      break;

    case scissors:
      playRound("scissors", computerChoice);
      computerChoice = getComputerChoice();
      break;

    default:
      throw new Error("ERROR");
  }
})

const results = document.createElement("div");
const score = document.createElement("div");

body.appendChild(results);
body.appendChild(score);



function getComputerChoice() {

  // Randomly select from option list
  let n = Math.floor(Math.random() * 3);

  switch (n) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";
  }

}

function getHumanChoice() {
  let input = prompt("Rock, Paper, or Scissors?", '');

  // Ensure input will match (case-insensitive) one of set options
  switch (input.toLowerCase()) {
    case "rock":
      return "rock";
    
    case "paper":
      return "paper";
    
    case "scissors":
      return "scissors";

    default:
      throw new Error("Invalid input");
  }

}

//function playGame() {

  let computerChoice = getComputerChoice();
//  let humanChoice = getHumanChoice();

  let humanScore = 0, computerScore = 0;

  function playRound(humanChoice, computerChoice) {

    // Compare computerChoice and humanChoice
    // Determine the winner of the round
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          results.textContent = "You win! Rock beats Scissors.";
          humanScore++;
        } else if (computerChoice === "paper") {
          results.textContent = "You lose :\( Paper beats Rock.";
          computerScore++;  
        } else {
          results.textContent = "It's a tie! You both chose Rock.";
        };
        break;
      
      case "scissors":
        if (computerChoice === "paper") {
          results.textContent = "You win! Scissors beats Paper.";
          humanScore++;
        } else if (computerChoice === "rock") {
          results.textContent = "You lose :\( Rock beats Scissors.";
          computerScore++;  
        } else {
          results.textContent = "It's a tie! You both chose Scissors.";
        } 
        break;
      
      case "paper":
        if (computerChoice === "rock") {
          results.textContent = "You win! Paper beats Rock.";
          humanScore++;
        } else if (computerChoice === "scissors") {
          results.textContent = "You lose :\( Scissors beats Paper.";
          computerScore++;
        } else {
          results.textContent = "It's a tie! You both chose Paper.";
        } 
        break;
      
      default:
        throw new Error("Error with playRound");
    }

 //   console.log(`You: ${humanScore}, Computer: ${computerScore}`);
      score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;

  }

  // Call playRound five times
  //playRound(humanChoice, computerChoice);
  // for (i = 1; i < 5; i++) {
  //   computerChoice = getComputerChoice();
  //   humanChoice = getHumanChoice();
  //   playRound(humanChoice, computerChoice);
  // }
  
  if (computerScore > humanScore) {
    console.log(`The computer defeated you... Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  } else if (humanScore > computerScore) {
    console.log(`You beat the computer! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  } else if (computerScore === humanScore) {
    console.log(`It's a tie! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  } else {
    console.error("Final Score Error");
  }
  
//}

// Call playGame to start game upon page load
//playGame();


