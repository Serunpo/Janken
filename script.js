

let choices = ["Rock", "Paper", "Scissor"]
let computerSelection;

//computer chooses from number 1-3 which defines to rock paper scissor
function compSel(){
    computerSelection = Math.floor(Math.random() * 3) + 1;
    console.log("Computer: " + computerSelection)
} 

//this function determines if who wins, lose, or a tie
function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection){
        document.getElementById("winnerInd").innerHTML = "It's a TIE!"
    } else if (playerSelection == 1 && computerSelection == 3 || playerSelection == 2 && computerSelection == 1 || playerSelection == 3 && computerSelection == 2){
        document.getElementById("winnerInd").innerHTML = "You WIN!"
    } else {
        document.getElementById("winnerInd").innerHTML = "You LOSE!";
    }
    
    let playerChoice = document.getElementById("playerImg");

    let imageRock = "images/rock.png";
    let imageScissor = "images/scissor.png";
    if (playerSelection == 1){
        playerChoice.src = imageRock;
    } else if (playerSelection == 2){

    } else {
        playerChoice.src = imageScissor;
    }
}

//an eventlistener to the buttons for player selection from 1-3
document.getElementById("rock").addEventListener("click", function(){
    compSel();
    playRound(1, computerSelection);
})
document.getElementById("paper").addEventListener("click", function(){
    compSel()
    playRound(2, computerSelection);
})
document.getElementById("scissor").addEventListener("click", function(){
    compSel()
    playRound(3, computerSelection);
})


console.log()