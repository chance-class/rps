console.log("Hello World");

// Create function getComputerChoice
function getComputerChoice() {

  // Randomly select from option list for getComputerChoice
  let n = Math.floor(Math.random() * 3), computerChoice;

  switch (n) {
    case 0:
      computerChoice = "rock";
      break;

    case 1:
      computerChoice = "paper";
      break;

    case 2:
      computerChoice = "scissors";
      break;
  }

  return computerChoice;
}

// Create function getHumanChoice that will ask for input
// Ensure input will match(case -insensitive) one of set options
// Create variables computerScore and humanScore
// Initialize variables at 0
// Create function playRound
// Compare computerChoice and humanChoice
// Determine the winner of the round
// Increment the winner's score
// Console.log win / lose message
// Create function playGame
// Call playRound 5x
// Declare winner of the game 
