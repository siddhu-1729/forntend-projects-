let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

let userpara=document.querySelector("#user-score");
let comppara=document.querySelector("#computer-score");

const generatecompchoice=()=>{
    let ans=["rock","paper","scissor"];    //Math.rcandom()-->this method can generate random whole number values 
     const idx=Math.floor(Math.random()*3);  //Math.random()*n-->generates random whole numbers in range of 1 to n-1
       return ans[idx];
}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw";
    msg.style.backgroundColor="black";
    msg.style.color="white";
}

const showwinner=(userwin)=>{
          if(userwin){
            userscore++;
            userpara.innerText=userscore;
            // console.log("you won");
            msg.innerText="you won!";
            msg.style.backgroundColor="green";
          }else {
            computerscore++;
             comppara.innerText=computerscore;
            // console.log("you lost");
            msg.innerText="you lost";
            msg.style.backgroundColor="red";
          }
}

const playgame =(userchoice)=>{    //user choice 
    console.log("userchoice:",userchoice);
    //next step is to generate computer choice
     const compchoice=generatecompchoice();
     console.log("computerchoice:",compchoice);

     if(userchoice===compchoice){
        drawgame();
     }else {
        let userwin=true;
        if(userchoice==="rock"){
            //comp can pick paper or scissor
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //computer can pick either rock or scissor 
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            //computer can pick either rock or paper 
            userwin = compchoice==="rock"?false:true;
        }
        showwinner(userwin);
     }
     
};

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
         playgame(userchoice);
    });
});