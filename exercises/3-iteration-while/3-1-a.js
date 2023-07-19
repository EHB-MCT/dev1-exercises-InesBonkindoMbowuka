"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

//first code

/*draw();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);

	let i = 1;
	while (i < 12) {
		console.log(i);
		drawLines(75, 60 + i * 23, 325, 60 + i * 23);
		i++;
	}
	console.log("end");
}

function drawLines(x1, y1, x2, y2) {
	Utils.drawLine(x1, y1, x2, y2);
}*/

//redone

draw();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);

	let i = 1;

	while (i < 12) {
		drawLines(75, 50 + i * 25, 325, 50 + i * 25);
		console.log(i);
		i++;
	}
}

function drawLines(x, y, x2, y2) {
	context.beginPath();

	context.moveTo(x, y);
	context.lineTo(x2, y2);
	context.stroke();
}
