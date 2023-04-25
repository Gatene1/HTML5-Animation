//import { mario1 } from './pixelMario.js';
const CANVAS_WIDTH = 200;
const CANVAS_HEIGHT = 200;

const GRID_SIZE = 16;
const PIXELS_PER_SQUARE_INCH = 5;

const ANIMATION_FPS = 3;
const ANIMATION_FRAMES = 4;

let canvas, ctx, framesPerSecond;
let count, vCount, color;

let frameCount = 0;
let frameOn = 1;

let anim;

// Array variables to hold the array of colors of pixels. They are in separate files.
var mario1, mario2, mario3, mario4;

window.onload = function() {
	// Grab the canvas and its context, and set the latter to 2D.
	canvas = document.getElementById("canvasForMario");
	ctx = canvas.getContext('2d');
	
	framesPerSecond = 30;
	
	// Calls the CallDrawFunction() 30 times per second.
	setInterval(CallDrawFunction, 1000 / framesPerSecond);
}
function ClearCanvas() {
	DrawSquare(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, "white");
}

function CallDrawFunction() {
	ClearCanvas();
	frameCount++;
	
	// This is the timeline of when the individual frames play, and their timing
	// (every so other frame).
	if (frameCount > ANIMATION_FPS * 3 && frameCount <= ANIMATION_FPS * 4) {
		Animate(mario2);
	} else if (frameCount > ANIMATION_FPS * 2 && frameCount <= ANIMATION_FPS * 3) {
		Animate(mario3);
	} else if (frameCount > ANIMATION_FPS && frameCount <= ANIMATION_FPS * 2) {
		Animate(mario4);
	} else {	
		Animate(mario1);
	}
	
	// If the ending of the animation is reached, start the animation count over
	if (frameCount >= ANIMATION_FPS * ANIMATION_FRAMES)
		frameCount = 0;
	
	//Animate (mario4);
}

function Animate(childAnimation) {
	count = 0;
	vCount = 1;
	
	// Loops through the array of colors, and displays a 10 x 10 square at the specified spot of color specified in the array.
	childAnimation.forEach(function(pixelColor){
			DrawSquare(count + 1, vCount, PIXELS_PER_SQUARE_INCH, PIXELS_PER_SQUARE_INCH, pixelColor);
			count += PIXELS_PER_SQUARE_INCH;
			frameOn++;
		
		// If the array just displayed the 16th square in a line, the loop goes to the next "line" in the array of colors.
		if (count >= (PIXELS_PER_SQUARE_INCH * GRID_SIZE)){
			count = 0;
			vCount += PIXELS_PER_SQUARE_INCH;
		}
	});
}

function DrawSquare(x, y, width, height, colorNumber) {
	if (!colorNumber == 0) {
		
		switch (colorNumber) {
			case 1:
				color = "black";
				break;
			case 2:
				color = "rgba(107, 109, 0, 1)"; // Green for Mario's hair, eyes, moustache, shirt, and boots.
				break;
			case 3:
				color = "#ea9f22"; // Gold for mario's skin and overall buttons.
				break;				
			case 4:
				color="#b23320"; // Red for mario's hat and overalls.
				break;
			default:
				color="white";
				break;
		}
		
		ctx.fillStyle = color;
		ctx.fillRect(x, y, width, height);
	}
}