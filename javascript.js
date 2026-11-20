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
let result = document.querySelector("#results");
let score = document.querySelector("#score");
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result.textContent = "You win!";
        humanScore++;
        score.textContent = `Your score: ${humanScore}`;
    if (humanScore === 5) {
       result.textContent = "You win the game!";
    }
    } else if (
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        result.textContent = "Computer wins!";
        computerScore++;
        score.textContent = `Computer score: ${computerScore}`;
    if (computerScore === 5) {
        result.textContent = "Computer wins the game!";
    }
    } else {
        result.textContent = "The game is a tie!";
    }

    console.log("Your score:", humanScore);
    console.log("Computer score:", computerScore);

}
let rok = document.querySelector("#rok");
rok.addEventListener("click", () =>{
 playRound("rock", getComputerChoice());
});
let pep = document.querySelector("#pep");
pep.addEventListener("click", () =>{
 playRound("paper", getComputerChoice());
});
let sijer = document.querySelector("#sijer");
sijer.addEventListener("click", () =>{
 playRound("scissors", getComputerChoice());
});