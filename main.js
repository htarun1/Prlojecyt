// Animation Intro

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width= 600;
cnv.height = 400;

// Global Variable
let rectX = 100;
let rectSize = 80;
let rectBlue = 255;
let rectRed = 0;

let animate = false;

// Main Program Loop (60 fps)
requestAnimationFrame(loop);
function loop() {
    // Update Variables

    if(animate) {
    rectX += Math.random() * 10 - 5;
    rectSize += Math.random() * 2 - 1;
    rectBlue--;
    rectRed++;
    }
    

    // Draw a Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height)

    // Draw a Square
    // if(animate) {
    ctx.fillStyle = "rgb(" + rectRed +", 0," + rectBlue + ")";
    ctx.fillRect(rectX, 150, rectSize, rectSize);
   // } 
    requestAnimationFrame(loop);
}

// // Event Stuff
// document.addEventListener("keydown", keydownHandler);


// function keydownHandler() {  
//     if (event.code == "Space") {
//     animate = !animate; 
//     }    
    
// }

// Event Stuff
document.addEventListener("mouseover", mousehoverHandler);
   

function mousehoverHandler(event) {  

    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect(); 
      
    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = Math.round(event.clientX - cnvRect.left);
    mouseY = Math.round(event.clientY - cnvRect.top);

    if () {
    animate = !animate; 
    }    
    
}
