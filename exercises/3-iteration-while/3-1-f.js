"use strict";
import context from "../../scripts/context.js";

draw();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);
	drawDiagonalSquares();
}

function drawDiagonalSquares() {
	let i = 0;
	let x = 75;
	let y = 75;

	while (i < 7) {
		context.strokeRect(x + i * 25, y + i * 25, 100, 100);
		i = i + 1;
	}
}
