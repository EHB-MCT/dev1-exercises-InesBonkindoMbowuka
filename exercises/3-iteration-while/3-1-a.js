"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

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
}
