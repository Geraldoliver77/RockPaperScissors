const showResult = document.getElementById("result");

getComputerChoice = () =>{  
    
    let random =  (Math.floor((Math.random() * 3)));

    switch (random) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    
        default:
            break;
    }
}

getResult = (computerChoice) =>{ 

    let choice = prompt("what is your choice").toUpperCase();
    
    
    console.log(choice+"user");
    console.log(computerChoice.toUpperCase()+"computer");

    if(choice == computerChoice.toUpperCase()){
        return 0;
    }
    else if(choice == "ROCK" && computerChoice.toUpperCase() == "SCISSORS"){
        return 1;
    }else if(choice == "SCISSORS" && computerChoice.toUpperCase() == "PAPER"){
        return 1;
    }
    else if(choice == "PAPER" && computerChoice.toUpperCase() == "ROCK"){
        return 1;
    }else{
        return -1;
    }
    


    
}

let total = 0 ;
let finalResult;

for (let i = 0; i < 3; i++) {

    let result = getResult(getComputerChoice());
         
    total = total + result;

    console.log(total);

    if (total < 0){
        finalResult = "You Lose";
    }else if(total == 0){
        finalResult = "DRAW"
    }else{
        finalResult = "You Win";
    }
    
    
}

showResult.textContent=finalResult;  

