let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#newbtn");
let msgcontainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;  //players turn 
 
const winpat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];

const resetgame = ()=>{
    turn = true;
     enabledboxes();
     msgcontainer.classList.add("hide");
    
  };
  
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       if(turn){
        box.innerText="O";
        turn=false;
       }else {
        box.innerText="X";
        turn = true;
       }
       box.disabled=true;
       checkwinner();
    });
});

const checkwinner =()=>{
    for(pat of winpat){
        let pos1=boxes[pat[0]].innerText;
        let pos2=boxes[pat[1]].innerText;
        let pos3=boxes[pat[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner" , pos1);
                showWinner(pos1);
            }
        }
    }
};

const showWinner = (winner)=>{
    
    msgcontainer.innerText=`Congratulations , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    
      disabledboxes();
};


const disabledboxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enabledboxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=" ";
    }
};
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);