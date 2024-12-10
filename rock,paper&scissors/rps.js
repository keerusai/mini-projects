//userscore and computer score update
let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
//for the computer choice
const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
    const randomIndx= Math.floor(Math.random()*3);
    return options[randomIndx];
    
    //math.floor is used for the elimination of the decimal point from an number
    //math.random is used to print some random value from an computer
    //*3 because we have 3 values r,p,s
}

const drawGame= ()=>{
    console.log("Game is Draw")
}

const playGame=(userChoice)=>{
console.log("user choice =",userChoice);
    //generate computer choice
const compChoice=genCompChoice();
console.log("Comp choice = ",compChoice);

if(userChoice === compChoice)
{//draw choice
    drawGame();
}else
{
    let userWin=true;
    if(userChoice==="rock")
    {
        //scissors,paper
        userWin=compute==="paper"? false:true;
    }elseif(userChoice==="paper") 
    {
        //rock, scissors
        userWin=compChoice==="scissors"?false:true;
    }
    else
    {
        //rock,paper
        userWin=compChoice==="rock"?false:true;
    }
}
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
})
