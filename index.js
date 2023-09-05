// const { urlencoded } = require("express");
let changestyles = "idle";
const dropdown = document.getElementById('controls');
dropdown.addEventListener('change',function(e){
    changestyles = e.target.value
}); 


const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d'); 
const canva_width = canvas.width = 600;
const canva_height = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "shadow_dog.png"
const spriteWidth=575;
const spriteHeight=523;
let frameX=0;
let frameY=0;
let gameframe=0;
const stagger = 5;


const spriteAnimation = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 9,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 5,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    }
];    

animationStates.forEach((state,index) =>{
    let frames = {
        loc: [],
    }
    for(let j=0;j<state.frames;j++){
        let positionX = j*spriteWidth;
        let positionY = index*spriteHeight;
        frames.loc.push({x: positionX,y: positionY});
    }
    spriteAnimation[state.name] = frames;
});
console.log(spriteAnimation);


function animate(){
    ctx.clearRect(0,0,canva_width,canva_height);
    let position = Math.floor(gameframe/stagger) % spriteAnimation[changestyles].loc.length;
    let frameX = spriteWidth*position;
    let frameY = spriteAnimation[changestyles].loc[position].y;

    ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    // if(gameframe%stagger == 0){
    //     if(frameX < 6) frameX++;
    //     else frameX = 0;
    // }
     gameframe++;
    requestAnimationFrame(animate);
}
animate();
console.log("hello");
