console.log("Hello World");
console.log("Lerning Javascript")
// rock-paper-sesiour
// score
let computerScore = 0;
let heumanScore = 0;

function getComputerChoice () {
    let randomNumber = Math.random();

    if (randomNumber  <0.33) {
        return "rock";
    }

    else if(randomNumber<0.66) {
        return "paper";

    }
        
    else {
        return "scissors";
    }
}
// console.log(getComputerChoice());
// getHeuman choice
function getHeumanChoie () {
    let userinput = prompt("please enter your input");
    return userinput;
}
// console.log(getHeumanChoie());

// playround
function playround (heumanChoie, computerChoice) {
    if ( heumanChoie === computerChoice)
        console.log("it's tie");
}
let heumanSelection = getHeumanChoie();
let computerSelection = getComputerChoice();
playround (heumanSelection, computerSelection);