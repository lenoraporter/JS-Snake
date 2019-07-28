// In order to create a low res "block" look, we will need to set the block size and the amount 
// of blocks associated with the width and height of the canvas.
var numOfBlocks = 20;
// The initial size of each block and the initial size of the snake
var blockSize = 20;

function setup() {
createCanvas(400, 400);
frameRate(10);

}

function draw() {
background(0, 0, 0);
// Color of snake
fill(255, 219, 88);
// rect() takes four values. X, Y, Width, Height
rect(headX * blockSize, headY * blockSize, blockSize, blockSize);
}