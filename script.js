

let choices = ["Rock", "Paper", "Scissor"]
let computerSelection;
let round = 1;
let pScore = 0;
let cScore = 0;

//computer chooses from number 1-3 which defines to rock paper scissor
function compSel(){
    computerSelection = Math.floor(Math.random() * 3) + 1;
    console.log("Computer: " + computerSelection)
} 


function updateScore(){
    document.getElementById("playerScore").innerHTML = pScore;
    document.getElementById("computerScore").innerHTML = cScore;
    document.getElementById("round").innerHTML = `Round ${round}`
}
//this function determines if who wins, lose, or a tie

function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection){
        document.getElementById("winnerInd").innerHTML = "It's a TIE!"
    } else if (
        (playerSelection == 1 && computerSelection == 3) || 
        (playerSelection == 2 && computerSelection == 1) || 
        (playerSelection == 3 && computerSelection == 2)
    ){
        document.getElementById("winnerInd").innerHTML = "You WIN!"
        pScore++;
        updateScore();
    } else {
        document.getElementById("winnerInd").innerHTML = "You LOSE!";
        cScore++;
        updateScore();
    }
    
    //shows what the player and computer chose
    let playerChoice = document.getElementById("playerImg");
    let computerChoice = document.getElementById("computerImg");

    let imageRock = "images/rock.png";
    let imageScissor = "images/scissor.png";
    let imagePaper = "images/paper.png";

    if (playerSelection == 1){
        playerChoice.src = imageRock;
    } else if (playerSelection == 2){
        playerChoice.src = imagePaper;
    } else {
        playerChoice.src = imageScissor;
    }
    
    if (computerSelection == 1){
        computerChoice.src = imageRock;
    } else if (computerSelection == 2){
        computerChoice.src = imagePaper;
    } else {
        computerChoice.src = imageScissor;
    }
    
    //round counter
    if (round < 5){
        round++;
        document.getElementById("round").innerHTML = `Round ${round}`;
    } else {
        console.log("Game Over");
        gameResult();
    }

    console.log(round)
}
function gameResult(){
    if (round === 5 && pScore === cScore){
        document.getElementById("round").innerHTML = "TIE!! (Resetting)"
    } else if (round === 5 && pScore > cScore){
        document.getElementById("round").innerHTML = "GG! EZ! (Resetting)"
    } else if (round === 5 && pScore < cScore){
        document.getElementById("round").innerHTML = "You got smoked on!! (Resetting)"
    }
    setTimeout(resetGame, 2500);
}

function resetGame(){
    pScore = 0;
    cScore = 0;
    round = 1;
    updateScore();
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

