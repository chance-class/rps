console.log("Hello World");

// Create function getComputerChoice
function getComputerChoice() {

  // Randomly select from option list for getComputerChoice
  let n = Math.floor(Math.random() * 3), choice;

  switch (n) {
    case 0:
      choice = "rock";
      break;

    case 1:
      choice = "paper";
      break;

    case 2:
      choice = "scissors";
      break;
  }

  return choice;
}

let input;

// Create function getHumanChoice that will ask for input
function getHumanChoice() {
  let choice;

  input = prompt("Rock, Paper, or Scissors?", '');

  // Ensure input will match (case -insensitive) one of set options
  switch (input.toLowerCase()) {
    case "rock":
      choice = "rock";
      break;
    
    case "paper":
      choice = "paper";
      break;
    
    case "scissors":
      choice = "scissors";
      break;

    default:
      alert("Invalid input");
      getHumanChoice();
  }

  return choice;
}

// Create variables computerScore and humanScore
// Initialize variables at 0
let humanScore = 0, computerScore = 0;

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

// Create function playRound
function playRound(humanChoice, computerChoice) {

  console.log(humanChoice, computerChoice);

  // Compare computerChoice and humanChoice
  switch (true) {
    case humanChoice === "rock" && computerChoice === "scissors":
      console.log("You win! Rock beats Scissors.");
      humanScore++;
      break;
    
    case humanChoice === "scissors" && computerChoice === "paper":
      console.log("You win! Scissors beats Paper.");
      humanScore++;
      break;

    case humanChoice === "paper" && computerChoice === "rock":
      console.log("You win! Paper beats Rock.");
      humanScore++;
      break;

    case computerChoice === "rock" && humanChoice === "scissors":
      console.log("You lose :\( Rock beats Scissors.");
      computerScore++;
      break;

    case computerChoice === "scissors" && humanChoice === "paper":
      console.log("You lose :\( Scissors breats Paper.");
      computerScore++;
      break;

    case computerChoice === "paper" && humanChoice === "rock":
      console.log("You lose :\( Paper beats Rock.");
      computerScore++;
      break;

    case humanChoice === "rock" && computerChoice === "rock":
      console.log("It's a tie!")
      break;

    case humanChoice === "paper" && computerChoice === "paper":
      console.log("It's a tie!")
      break;

    case humanChoice === "scissors" && computerChoice === "scissors":
      console.log("It's a tie!")
      break;

    default:
      console.error("Error with playRound");
  }

  console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
}


// Determine the winner of the round
// Increment the winner's score
// Console.log win / lose message
// Create function playGame
// Call playRound 5x
// Declare winner of the game 
