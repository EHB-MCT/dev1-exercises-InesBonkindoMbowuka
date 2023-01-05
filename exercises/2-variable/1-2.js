"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawRect();
drawSquare();

function drawRect() {
	drawSquare(0, 800);
	drawSquare(50, 700);
	drawSquare(100, 600);
	drawSquare(150, 500);
	drawSquare(200, 400);
	drawSquare(250, 300);
	drawSquare(300, 200);
	drawSquare(350, 100);
}

function drawSquare(pos, size) {
	let red = Math.random() * 255;
	let green = Math.random() * 255;
	let blue = Math.random() * 255;

	context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
	context.fillRect(100 + pos, 100 + pos, size, size);
}
