// Create function getComputerChoice
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

// Create function getHumanChoice that will ask for input
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

// Create function playGame
function playGame() {

  // Assign getChoice functions to variables
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  // Create variables computerScore and humanScore
  // Initialize variables at zero
  let humanScore = 0, computerScore = 0;

  // Move playRound() into playGame()

  // Create function playRound
  function playRound(humanChoice, computerChoice) {

    // Compare computerChoice and humanChoice
    // Determine the winner of the round
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "scissors") {

          // Console.log win / lose message
          console.log("You win! Rock beats Scissors.");

          // Increment the winner's score
          humanScore++;
        } else if (computerChoice === "paper") {
          console.log("You lose :\( Paper beats Rock.");
          computerScore++;  
        } else {
          console.log("It's a tie! You both chose Rock.");
        };
        break;
      
      case "scissors":
        if (computerChoice === "paper") {
          console.log("You win! Scissors beats Paper.");
          humanScore++;
        } else if (computerChoice === "rock") {
          console.log("You lose :\( Rock beats Scissors.");
          computerScore++;  
        } else {
          console.log("It's a tie! You both chose Scissors.");
        } 
        break;
      
      case "paper":
        if (computerChoice === "rock") {
          console.log("You win! Paper beats Rock.");
          humanScore++;
        } else if (computerChoice === "scissors") {
          console.log("You lose :\( Scissors beats Paper.");
          computerScore++;
        } else {
          console.log("It's a tie! You both chose Paper.");
        } 
        break;
      
      default:
        throw new Error("Error with playRound");
    }

    // Display current score
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);

  }

  // Call playRound five times
  playRound(humanChoice, computerChoice);
  for (i = 1; i < 5; i++) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
  }
  
  // Declare winner of the game and display final scores
  if (computerScore > humanScore) {
    console.log(`The computer defeated you... Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  } else if (humanScore > computerScore) {
    console.log(`You beat the computer! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  } else if (computerScore === humanScore) {
    console.log(`It's a tie! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  } else {
    console.error("Final Score Error");
  }
  
}

// Call playGame to start game upon page load
playGame();


