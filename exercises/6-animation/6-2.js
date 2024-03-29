"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let updateTime = 0;

update();

function update(currentTime) {
	drawBall();
	requestAnimationFrame(update);
	console.log(currentTime / 1000);

	let newTime = currentTime - updateTime;

	newTime == currentTime;
}

function drawBall() {
	let x = Utils.randomNumber(0, width);
	let y = Utils.randomNumber(0, height);

	context.fillStyle = "white";
	context.beginPath();
	context.rect(0, 0, width, height);
	context.fill();

	context.fillStyle = "blue";
	Utils.fillCircle(x, y, 50);
}

/*let bubbles = [];

setup();

update();

function setup() {
	for (let i = 0; i < 200; i++) {
		let bubble = {
			x: width / 2,
			y: height / 2,
			size: 10,
			hue: Utils.randomNumber(0, 360),
		};
		bubbles[i] = bubble;
	}
	console.log(bubbles);
}

function update() {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);
	for (let i = 0; i < bubbles.length; i++) {
		let bubble = bubbles[i];
		bubble.x += Utils.randomNumber(-2, 2);
		bubble.y += Utils.randomNumber(-2, 2);
		bubble.size += 0.01;
		drawBubble(bubble);
	}

	requestAnimationFrame(update);
}

function drawBubble(bubble) {
	context.fillStyle = Utils.hsl(bubble.hue, 50, 50);
	Utils.fillCircle(bubble.x, bubble.y, bubble.size);
	context.fillStyle = Utils.hsl(bubble.hue, 50, 75);
	Utils.fillCircle(bubble.x + bubble.size / 3, bubble.y - bubble.size / 3, bubble.size / 4);
}*/
