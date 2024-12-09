//create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
//when i click first time=>dark , next time=>light

let modebtn= document.querySelector("#mode");
let currmode="light";

modebtn.addEventListener("click",()=>{
    console.log("you are trying to change the mode")
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currmode);
});