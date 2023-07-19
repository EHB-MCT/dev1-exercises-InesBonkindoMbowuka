"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "black";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);
	drawSunBeams();
}

function drawSunBeams() {
	let i = 50;

	while (i <= 500) {
		drawLine(50, 50, x2, y2);
		drawLine(50, 50, x2, y2);
		i = i + 10;
	}
}

function drawLine(x1, y1, x2, y2) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
}
