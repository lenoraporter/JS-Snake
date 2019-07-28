// In order to create a low res "block" look, we will need to set the block size and the amount 
// of blocks associated with the width and height of the canvas.
var numOfBlocks = 20;
// The initial size of each block and the initial size of the snake
var blockSize = 20;

//Snake's head speed
var speedX = 0;
var speedY = 0;

function setup() {
createCanvas(400, 400);
frameRate(10);

// Snake's head position
// The head should start in the middle of the screen

headX = numOfBlocks/2;
headY = numOfBlocks/2;
}

function draw() {
background(0, 0, 0);
// Color of snake
fill(255, 219, 88);
// rect() takes four values. X, Y, Width, Height
rect(headX * blockSize, headY * blockSize, blockSize, blockSize);
// Update the position of the snake's head
    headX = headX + speedX;
    headY = headY + speedY;
    // loop back inside the screen (Create restraints for the snake)
    if(headX < 0){
        headX = numOfBlocks;
    }
    if(headX > numOfBlocks) {
        headX = 0
    }
    if(headY < 0) {
        headY = numOfBlocks;
    }
    if(headY > numOfBlocks) {
        headY = 0;
    }
}

// Key Code CheatSheet https://css-tricks.com/snippets/javascript/javascript-keycodes/
// The canvas is a square. The X axis is left to right. The Y axis is up and down. 
// Example: When keypress is keycode 38 (Up arrow) The X axis speed is 0 while Y is -1.
function keyPressed() {
    // Up Arrow
    if(event.which == 38) {
        speedX = 0;
        speedY = -1;
    // Right Arrow
    } else if (event.which == 39) {
        speedX = 1;
        speedY = 0;
    // Down Arrow
    } else if (event.which == 40) {
        speedX = 0;
        speedY = 1;
    // Left Arrow
    } else if (event.which == 37) {
        speedX = -1;
        speedY = 0;
    }
}