function getComputerChoice() {
    const math = Math.random();
    if (math < 1 / 3) {
        return "Rock";
    } else if (math < 2 / 3) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    } else {
        alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let pcScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log("Human wins this round!");
        humanScore += 1;
    } else {
        console.log("Computer wins this round!");
        pcScore += 1;
    }

    console.log(`Score - Human: ${humanScore}, Computer: ${pcScore}`);
}

function playGame() {
    const rounds = prompt("How many rounds would you like to play?");
    for (let i = 0; i < rounds; i++) {
        playRound();
    }

    if (humanScore > pcScore) {
        console.log("Congratulations, you won the game!");
    } else if (humanScore < pcScore) {
        console.log("The computer won the game. Better luck next time!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();