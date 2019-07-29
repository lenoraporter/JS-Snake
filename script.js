// In order to create a low res "block" look, we will need to set the block size and the amount
// of blocks associated with the width and height of the canvas.
var numOfBlocks = 20;
// The initial size of each block and the initial size of the snake
var blockSize = 20;

// Snake's head speed
var speedX = 0;
var speedY = 0;

// To make our game's snake look like an actual snake we need to attach more blocks to the snake's head.
// For more detail about the tail's structure, go down to tails.push
// Initial length of the snake
var tailLength = 3;
// Keep track of the snake's previous positions
var tails = [];

// Track apple's position
var appleX = 0;
var appleY = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(10);

  // Snake's head position
  // The head should start in the middle of the screen

  headX = numOfBlocks / 2;
  headY = numOfBlocks / 2;

  // pick random number between 0 and numOfBlocks-1 to set the apple's position
  appleX = round(random(0, numOfBlocks - 1));
  appleY = round(random(0, numOfBlocks - 1));
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
  if (headX < 0) {
    headX = numOfBlocks;
  }
  if (headX > numOfBlocks) {
    headX = 0;
  }
  if (headY < 0) {
    headY = numOfBlocks;
  }
  if (headY > numOfBlocks) {
    headY = 0;
  }
  // When the snake's head moves to a new position, we need to add that to the tail's array.
  tails.push({ x: headX, y: headY });
  // Remove first tail when it's too long
  while (tails.length > tailLength) {
    tails.shift();
  }
  // draw all positions in tails array as rectangles
  for (var i = 0; i < tails.length; i++) {
    rect(tails[i].x * blockSize, tails[i].y * blockSize, blockSize, blockSize);
  }
  // draw the apple
  fill(255, 0, 0);
  rect(appleX * blockSize, appleY * blockSize, blockSize, blockSize);
  // when hitting the apple, we move the apple to another spot, taillength increases, and the score increases by 10.
  if (headX == appleX && headY == appleY) {
    appleX = round(random(0, numOfBlocks - 1));
    appleY = round(random(0, numOfBlocks - 1));
    tailLength++;
  }
  // when the snake is moving or When speed is not 0.
  if(speedX != 0 || speedY != 0) {
    // Check if the any tail position matches the head position (Except for the last tail position)
    for(var i = 0; i < tails.length - 1; i++) {
      // If the head position occupies the tail position, then the game ends.
        if(headX == tails[i].x && headY == tails[i].y) {
		// Reset game back to the starting point (Put head back in the middle, the speed is at 0, tail length goes back to 3, reset apples position and empty tails array.)
        headX = numOfBlocks/2
        headY = numOfBlocks/2
        
        speedX = 0
        speedY = 0
        
        tails = []
        tailLength = 3
        
        appleX = round(random(0, numOfBlocks-1))
        appleY = round(random(0, numOfBlocks-1))
    }
}

// Key Code CheatSheet https://css-tricks.com/snippets/javascript/javascript-keycodes/
// The canvas is a square. The X axis is left to right. The Y axis is up and down.
// Example: When keypress is keycode 38 (Up arrow) The X axis speed is 0 while Y is -1.
function keyPressed() {
  // Up Arrow
  if (event.which == 38) {
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
