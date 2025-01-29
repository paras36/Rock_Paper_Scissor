let humanScore = document.getElementById("user_score") ;
let computerScore = document.getElementById("comp_score");
let uchoice= document.getElementById("user_choice");
let cchoice= document.getElementById("comp_choice");
let winner = document.getElementById("winner_txt");

let humanSelection;
let computerSelection;
humanScore.textContent=0;
computerScore.textContent=0;


function getComputerChoice() {

    let ary = ["rock", "paper", "scissor"];
    return ary[Math.floor(Math.random() * 3)];
}





function rock (){
    humanSelection="rock";
    playRound();
    return humanSelection;
}

function paper ()  {
    humanSelection="paper";
    playRound();
    return humanSelection;
}

function scissor () {
    humanSelection="scissor";
    playRound();
    return humanSelection;
}



function playRound() {

   
    let computerSelection = getComputerChoice();
    uchoice.textContent=(" user chooses " + humanSelection);
    cchoice.textContent=("computer chooses " + computerSelection);



    if (humanSelection == computerSelection) {
        // choice.textContent=("its a draw mff!");

    }
    else if (humanSelection != computerSelection) {
        if (humanSelection == "rock") {
            if (computerSelection == "paper") {
                computerScore.textContent++;

            }
            else if (computerSelection == "scissor") {
                humanScore.textContent++;
            }

        }

        else if (humanSelection == "paper") {
            if (computerSelection == "rock") {
                humanScore.textContent++;

            }
            else if (computerSelection == "scissor") {
                computerScore.textContent++;
            }
        }

        else if (humanSelection == "scissor") {
            if (computerSelection == "rock") {
                computerScore.textContent++;
            }
            else if (computerSelection == "paper") {
                humanScore.textContent++
            }
        }
    }
check_winner();
    
}

function check_winner() {
    if (humanScore.textContent==5) {
        winner.textContent="user wins";
    stop_game();
    }
    
 else if (computerScore.textContent==5) {
        winner.textContent="comp wins";
        stop_game();
    }

    
}

function stop_game() {
    let buttons =document.getElementsByClassName("buttons");
    for (let i = 0; i < buttons.length; i++) {
        
        buttons[i].disabled=true;
    }
    
}



// function playGame() {
//     for (let i = 0; i < 5; i++) {

//         playRound(humanSelection, computerSelection);

//     }
    
// }


