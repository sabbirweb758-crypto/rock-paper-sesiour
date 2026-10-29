function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Choose rock, paper or scissors");
    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
        humanScore++;
    } else if (
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log("Computer wins!");
        computerScore++;
    } else {
        console.log("The game is a tie!");
    }

    console.log("Your score:", humanScore);
    console.log("Computer score:", computerScore);
}

playRound(getHumanChoice(), getComputerChoice());

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
        humanScore++;
    } else if (
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log("Computer wins!");
        computerScore++;
    } else {
        console.log("The game is a tie!");
    }

    console.log("Your score:", humanScore);
    console.log("Computer score:", computerScore);
}

// playRound(getHumanChoice(), getComputerChoice());
for (let i = 1; i <= 5; i++) {
    playRound(getHumanChoice(),getComputerChoice());
}

if (humanScore > computerScore) {
        console.log("you wins")
    }

else if (computerScore > humanScore){
        console.log("computer wins")
    }

    else{
        console.log("the game is tie");
    }
}
playGame();