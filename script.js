let boxes=document.querySelectorAll('.box');
let msg=document.querySelector('.msg');
let newgame=document.querySelector('.new_game');
let msgContainer=document.querySelector('.msg-container ');
let reset=document.querySelector('.reset');
let turn=true;
let winnerpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];
boxes.forEach((box)=>{
    box.addEventListener('click',function(){
        if(turn){
            box.innerText="0";
            turn=false;
            
        }else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const checkwinner=()=>{
    for(let pattarn of winnerpattern){
        let pos1=boxes[pattarn[0]].innerText;
        let pos2=boxes[pattarn[1]].innerText;
        let pos3=boxes[pattarn[2]].innerText;
        if(pos1!="" && pos2 !="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showwinner(pos1);
                
            
            }
        //    if(pos1!==pos2 && pos2!==pos3){
        //     msg.innerText="MISS THE GAME"
        //    }
        
        }
        
    }

};
const showwinner=(winner)=>{
    
    msg.innerText=`congratulation,  ${winner} is  winner`;


      disablbox();
    
};
const disablbox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const resetbtn=()=>{
    turn=true;
    enableBoxes();
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msg.innerText="";
    }
};
reset.addEventListener('click',resetbtn);

