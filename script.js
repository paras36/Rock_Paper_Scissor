let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let ary = ["rock", "paper", "scissor"];
    return ary[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return (prompt("whats u gonna choose nigga").toLocaleLowerCase());
}


let humanSelection;
let computerSelection;

function playRound() {

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(" user chooses " +humanSelection);
    console.log("computer chooses " +computerSelection);



    if (humanSelection == computerSelection) {
        console.log("its a draw mff!");

    }
    else if (humanSelection != computerSelection) {
        if (humanSelection == "rock") {
            if (computerSelection == "paper") {
                computerScore++;

            }
            else if (computerSelection == "scissor") {
                humanScore++;
            }

        }

        else if (humanSelection == "paper") {
            if (computerSelection == "rock") {
                humanScore++;

            }
            else if (computerSelection == "scissor") {
                computerScore++;
            }
        }

        else if (humanSelection == "scissor") {
            if (computerSelection == "rock") {
                computerScore++;
            }
            else if (computerSelection == "paper") {
                humanScore++
            }
        }
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {

        playRound(humanSelection, computerSelection);

    }

}
playGame(); 
console.log("computer score "+computerScore);
console.log("user score " +humanScore);
