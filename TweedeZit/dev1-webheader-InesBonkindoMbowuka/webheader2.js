"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let frameCount = 0;

setup();
update();

window.onmousemove = resize;

function setup() {
	context.textAlign = "center";
	context.fillStyle = "white";
	context.font = "bold 48pt Arial";
}

function update() {
	frameCount++;
	context.fillStyle = Utils.hsl(frameCount % 360, 70, 50);
	context.fillRect(0, 0, width, height);
	context.fillStyle = "white";
	context.fillText("Inès Bonkindo", width / 2, height / 2 + 24);

	const numRows = 5;
	const numCols = 25;
	const circleSize = 30;
	const spacing = 5;

	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < numCols; j++) {
			let x = 35 + j * (circleSize * 2 + spacing);
			let y = 35 + i * (circleSize * 2 + spacing);
			Utils.strokeCircle(x, y, circleSize);
		}
	}
	requestAnimationFrame(update);
}

function resize(eventData) {
	let x = eventData.pageX;
	let y = eventData.pageY;
}
