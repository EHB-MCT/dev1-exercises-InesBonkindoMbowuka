"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

draw();

function draw() {
	drawButterfly();
	for (let i = 0; i < 10; i++) {}
}

function drawButterfly() {
	context.beginPath();
	context.ellipse(50, 100, 20, 50, -10, 0, Math.PI * 2);
	context.ellipse(100, 100, 20, 50, 10, 0, Math.PI * 2);
	context.fill();

	context.beginPath();
	context.ellipse(50, 160, 20, 50, 10, 0, Math.PI * 2);
	context.ellipse(100, 160, 20, 50, -10, 0, Math.PI * 2);
	context.fill();

	context.beginPath();
	context.ellipse(75, 130, 10, 50, 0, 0, Math.PI * 2);
	context.fill();

	context.fillStyle = "white";
	context.beginPath();
	context.arc(40, 90, 10, 0, Math.PI * 2);
	context.arc(110, 90, 10, 0, Math.PI * 2);
	context.fill();

	context.fillStyle = "white";
	context.beginPath();
	context.arc(40, 170, 10, 0, Math.PI * 2);
	context.arc(110, 170, 10, 0, Math.PI * 2);
	context.fill();
}
