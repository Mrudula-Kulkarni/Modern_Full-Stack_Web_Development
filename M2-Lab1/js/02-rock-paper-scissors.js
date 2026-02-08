function playGame() {
    let playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

    if (!["rock", "paper", "scissors"].includes(playerChoice)) {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return;
    }

    let gameOptions = ["rock", "paper", "scissors"];
    let computerSelection = gameOptions[Math.floor(Math.random() * 3)];

    let gameResult;
    if (playerChoice === computerSelection) {
        gameResult = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerSelection === "scissors") ||
        (playerChoice === "scissors" && computerSelection === "paper") ||
        (playerChoice === "paper" && computerSelection === "rock")
    ) {
        gameResult = `You win! ${playerChoice} beats ${computerSelection}.`;
    } else {
        gameResult = `You lose! ${computerSelection} beats ${playerChoice}.`;
    }

    alert(
        `You chose: ${playerChoice}\nComputer chose: ${computerSelection}\n${gameResult}`
    );
}

playGame();
