let btn=document.querySelector("button");
let currmode="light";
btn.addEventListener("click",()=>{
   if(currmode==="light"){
        currmode="black";
        document.querySelector("body").style.backgroundColor="black";
   }
   else{
    currmode="light";
    document.querySelector("body").style.backgroundColor = "white ";
   }
   console.log(currmode);
});