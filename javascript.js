    rock = document.createElement("button");
    rock.classList.add("rock");
    rock.textContent ="Rock";
    paper = document.createElement("button");
    paper.classList.add("paper");
    paper.textContent="Paper";  
    scissors = document.createElement("button");
    scissors.classList.add("scissors")
    scissors.textContent="Scissors"
    div =document.createElement("div")
    div.classList.add("container")
    div.appendChild(rock)
    div.appendChild(paper)
    div.appendChild(scissors)
    body = document.querySelector("body");
    score = document.createElement("div");
    score.classList.add("score")
    body.appendChild(score);
    body.appendChild(div);
    results = document.createElement("div");
    body.appendChild(results);
    options = document.querySelectorAll("button");
    const compChoices = ["rock","paper","scissors"]
    options.forEach(function(btn){
        btn.addEventListener("click",function(e){
            pChoice = e.target.classList.value
            let Cchoice = compChoices[Math.floor(Math.random()*3)]
            playRound(pChoice,Cchoice)
        })
    })
    let playerScore = 0;
    let computerScore = 0;
    let playRound = (playerChoice,computerChoice) =>{
    if (playerChoice=="rock"){
        if(computerChoice=="paper"){
            results.textContent="YOU LOSE! OPPONENT CHOSE PAPER!"
            computerScore++;
        }
        else if(computerChoice=="scissors"){
            results.textContent="YOU WIN! OPPONENT CHOSE SCISSORS"
            playerScore++;
        }
    }
    if (playerChoice=="scissors"){
        if(computerChoice=="paper"){
            results.textContent= "YOU WIN! OPPONENT CHOSE PAPER!"
            playerScore++;
        }
        else if(computerChoice=="rock"){
            results.textContent="YOU LOSE! OPPONENT CHOSE ROCK"
            computerScore++;
        }
    }
    if (playerChoice=="paper"){
        if(computerChoice=="rock"){
            results.textContent="YOU WIN! OPPONENT CHOSE ROCK!"
            playerScore++;
        }
        else if(computerChoice=="scissors"){
            results.textContent="YOU LOSE! OPPONENT CHOSE SCISSORS"
            computerScore++;
        }
    }
    if (playerChoice==computerChoice){
            results.textContent=`TIE! YOU BOTH CHOSE ${playerChoice.toUpperCase()}`
    }
    score.textContent=`Player score : ${playerScore}  Computer Score : ${computerScore}`
} 