let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userParagraphScore = document.querySelector("#user-score");
const computerParagraphScore = document.querySelector("#computer-score");

choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", function () {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        // console.log("Choice was clicked", userChoice);
    })
});

function playGame(userChoice) {
    // console.log("User Choice =", userChoice);
    const computerChoice = generateComputerChoice();
    // console.log("Computer Choice =", computerChoice);
    if (userChoice == computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = computerChoice == "paper" ? false : true;
        } else if (userChoice == "paper") {
            userWin = computerChoice == "scissor" ? false : true
        } else {
            userWin = computerChoice == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

function generateComputerChoice() {
    const options = ["rock", "paper", "scissor"];
    const Indx = Math.floor(Math.random() * 3);
    const computerChoice = options[Indx];
    return computerChoice;
}

function drawGame() {
    // console.log("Game draw!");
    msg.innerText = "Game draw...!  Play again...!";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

function showWinner(userWin, userChoice, computerChoice) {
    if (userWin) {
        // console.log("You won");
        userScore++;
        userParagraphScore.innerText = userScore;
        msg.innerText = "You won! Your " + userChoice + " beats " + computerChoice;
        msg.style.backgroundColor = "Green";
        msg.style.color = "white";
    } else {
        // console.log("You lost");
        computerScore++;
        computerParagraphScore.innerText = computerScore;
        msg.innerText = "You lost! " + computerChoice + " beats your " + userChoice;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}