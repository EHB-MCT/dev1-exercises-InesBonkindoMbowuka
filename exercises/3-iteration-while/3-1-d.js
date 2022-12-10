"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);

	let i = 0;
	while (i < 8) {
		Utils.drawLine(50 + i * 21, 200 + i * 22, 200 + i * 22, 50 + i * 21);
		i++;
	}
}

function drawLine(x1, y1, x2, y2) {
	drawLine(x1, y1, x2, y2);
}
