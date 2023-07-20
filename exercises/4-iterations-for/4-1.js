"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/Utils.js";

let horizontalLines = 100;
let verticalLines = 30;

let width = context.canvas.width;
let height = context.canvas.height;

draw();
drawLines();

function draw() {
	context.fillStyle = "orange";
	context.fillRect(0, 0, width, height);
}

function drawLines() {
	context.strokeStyle = "white";
	let step = width / horizontalLines;
	let stip = height / verticalLines;

	for (let i = 0; i < horizontalLines; i++) {
		Utils.drawLine(0 + step * i, 0, width - step * i, height);

		for (let i = 0; i <= verticalLines; i++) {
			Utils.drawLine(0, 0 + stip * i, width, height - stip * i);
		}
	}
}
