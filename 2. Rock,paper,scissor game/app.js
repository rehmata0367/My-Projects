let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const gencompChoice = () => {
    const compChoices = ["rock", "paper", "scissors"];
    const compChoice = Math.floor(Math.random() * 3);
    return compChoices[compChoice];
}

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const playgame = (userChoice) => {
    const compChoice = gencompChoice();

    if (userChoice === compChoice) {
        msg.innerText = "The Game was a Draw play again";
        msg.style.background = "black";
    } else if ((userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = "You win Congrats = " + userChoice + " beats " + compChoice;
        msg.style.background = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = "You lose Computer wins = " + compChoice + " beats " + userChoice;
        msg.style.background = "red";
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});